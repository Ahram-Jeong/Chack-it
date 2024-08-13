from django.contrib.auth import login, get_user, logout
from django.contrib.auth.mixins import UserPassesTestMixin
from django.contrib.auth.views import LoginView, LogoutView
from django.http import JsonResponse
from django.utils.decorators import method_decorator
from django.views import View
from django.views.decorators.cache import never_cache
from django.views.generic import ListView, DetailView, CreateView
from django.views.generic.edit import BaseCreateView
import json

from book.models import Book
from review.models import Review
from users.forms import CustomUserCreationForm
from users.models import User


# Create your views here.

# 로그인
class ApiLoginView(LoginView):
    def form_valid(self, form):
        user = form.get_user()
        login(self.request, user)
        userDict = {
            "id" : user.id,
            "username" : user.username
        }
        return JsonResponse(data = userDict, safe = True, status = 200)

    def form_invalid(self, form):
        return JsonResponse(data = form.errors, safe = True, status = 400)

# 로그인 인증 정보 가져오기
class ApiMeView(View):
    def get(self, request, *args, **kwargs):
        user = get_user(request)
        if user.is_authenticated: # 로그인 O
            userDict = {
                "id" : user.id,
                "username" : user.username,
            }
        else: # 로그인 X
            userDict = {
                "username" : None
            }
        return JsonResponse(data = userDict, safe = True, status = 200)

# 로그아웃
class ApiLogoutView(LogoutView):
    @method_decorator(never_cache)
    def dispatch(self, request, *args, **kwargs):
        logout(request)
        return JsonResponse(data = {}, safe = True, status = 200)


# 회원가입
class ApiRegisterView(BaseCreateView):
    form_class = CustomUserCreationForm

    def form_valid(self, form):
        self.object = form.save()
        userDict = {
            "id" : self.object.id,
            "username" : self.object.username,
            "email" : self.object.email,
        }
        return JsonResponse(data = userDict, safe = True, status = 201)

    def form_invalid(self, form):
        # 오류 정보 담기
        errors = {
            field : error.get_json_data() for (field, error) in form.errors.items()
        }
        return JsonResponse(data ={"errors" : errors}, safe = True, status = 400)

# 도서 검색
class ApiSearchListView(ListView):
    model = Book

    def get_queryset(self):
        query = self.request.GET.get("keyword", "")
        if query:
            return Book.objects.filter(title__icontains = query)
        return Book.objects.none()

    def render_to_response(self, context, **response_kwargs):
        books = self.get_queryset() # queryset 결과
        data = [{
            "id": book.id,
            "title": book.title,
            "author": book.author,
            "publisher": book.publisher} for book in books]
        return JsonResponse(data = data, safe = False)

# 도서 상세 정보
class ApiBookDetailView(DetailView):
    model = Book

    def render_to_response(self, context, **response_kwargs):
        book = self.get_object()
        data = {
            "id": book.id,
            "title": book.title,
            "author": book.author,
            "publisher": book.publisher,
            "description": book.description,
            "cover": book.cover,
        }
        return JsonResponse(data = data, safe = True)

# 리뷰 작성
class ApiReviewCreateView(CreateView):
    model = Review
    fields = ["review_rating", "review_content"]

    def post(self, request, *args, **kwargs):
        # Vue.js에서 JSON 형식으로 데이터를 보냈기 때문에 JSON 데이터 로드
        postData = json.loads(request.body)

        # 요청 데이터에서 데이터 추출
        review_rating = postData.get("review_rating")
        review_content = postData.get("review_content")
        user_id = int(postData.get("user_id"))
        book_id = int(postData.get("book_id"))

        # FK 참조로 User와 Book 인스턴스 가져오기
        try:
            user = User.objects.get(id = user_id)
            book = Book.objects.get(id = book_id)
        except User.DoesNotExist:
            return JsonResponse({"error": "User 404"}, status = 404)
        except Book.DoesNotExist:
            return JsonResponse({"error": "Book 404"}, status = 404)

        # null 값 혹은 빈 문자열 일 경우 오류 반환
        # 원래는 model에 제약 조건이 걸려 있어 오류가 발생해야 하지만,
        # api 요청은 폼 검증을 거치지 않고, 직접적으로 모델에 데이터를 저장할 수 있기 때문에 추가 검증이 필요
        if (review_content == None or review_content == "") :
            return JsonResponse({"error": "EMPTY ERROR"}, status = 400)

        # Review 객체 생성
        review = Review.objects.create(
            review_rating = review_rating,
            review_content = review_content,
            user = user,
            book = book
        )

        # 응답할 Review 객체를 JSON으로 변환
        data = {
            "id": review.id,
            "review_rating": review.review_rating,
            "review_content": review.review_content,
            "review_date": review.review_date.isoformat(),
            "user": {
                "id": user.id,
            },
            "book": {
                "id": book.id,
                "cover": book.cover,
                "title": book.title,
                "author": book.author,
                "publisher": book.publisher,
            }
        }
        return JsonResponse(data = data, safe = True)

# 사용자 리뷰 리스트
class ApiReviewListView(UserPassesTestMixin, ListView):
    model = Review
    context_object_name = "reviews" # 템플릿에서 사용할 이름
    
    # 검증 : 인증 된(로그인 한) 사용자 여부
    def test_func(self):
        return self.request.user.is_authenticated

    def get_queryset(self):
        return Review.objects.filter(user = self.request.user).select_related("book").order_by("-id")

    def render_to_response(self, context, **response_kwargs):
        # JSON 데이터 반환
        # context["reviews"] : CBV에서 템플릿 렌더링이나 응답을 구성할 때 사용되는 컨텍스트 데이터
        # values() : 조인한 테이블의 모든 필드가 아닌 명시된 필드만 추출, 성능면에서 더 좋음
        data = context["reviews"].values(
            "id",
            "review_rating",
            "review_content",
            "review_date",
            "book__title",  # book.title
            "book__author",  # book.author
            "book__cover"  # book.cover
        )
        review_list = list(data)
        return JsonResponse({"reviews": review_list})