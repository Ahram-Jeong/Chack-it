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
import random

from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity

from book.models import Book
from review.models import Review
from users.forms import CustomUserCreationForm
from users.models import User
from users.views import CustomLoginRequiredMixin


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
class ApiSearchListView(CustomLoginRequiredMixin, ListView):
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
class ApiBookDetailView(CustomLoginRequiredMixin, DetailView):
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
class ApiReviewCreateView(CustomLoginRequiredMixin, CreateView):
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

# 도서 추천
class ApiRecommendView(UserPassesTestMixin, ListView):
    # 인증 여부 확인
    def test_func(self):
        return self.request.user.is_authenticated

    # 확인 후 추가 로직
    def get_queryset(self):
        # 1. 로그인한 사용자의 리뷰 중 평점이 3점 이상인 책의 id 가져오기
        return Review.objects.filter(user=self.request.user, review_rating__gte=3).select_related("book").values("book__id")

    def get(self, request):
        # get_queryset() 으로 필터링된 리뷰 가져오기
        review_books = self.get_queryset()
        print(review_books, len(review_books))

        # 필터링 결과가 없다면 빈 리스트 반환
        if not review_books.exists():
            return JsonResponse(data = {"recommend_books": [], "filtered_book": ""}, safe = False)

        # 2. 책의 id 중 하나를 랜덤으로 선택
        select_one_book = random.choice(review_books)
        # 선택 된 책의 id 추출
        select_one_book_id = select_one_book["book__id"]
        print(f"==============================================={select_one_book_id}")

        # 3. 모든 책의 "categoryName" 필드 추출
        books = list(Book.objects.all()) # QuerySet 결과를 리스트로 변환
        categories = [book.categoryName for book in books]

        # 4. 문서-단어 행렬 생성
        vectorizer = CountVectorizer()
        cnt_matrix = vectorizer.fit_transform(categories)

        # 5. 코사인 유사도 계산
        cosine_sim = cosine_similarity(cnt_matrix, cnt_matrix)

        # 6. 선택된 책 ID에 해당하는 책의 인덱스 찾기
        # DB의 id와 파이썬 리스트나 행렬의 위치를 나타내는 인덱스가 다르기 때문
        # 유사도 행렬에서는 행렬의 인덱스를 사용해야 함
        book_idx = next(i for i, book in enumerate(books) if book.id == select_one_book_id)

        # 6. 유사한 컨텐츠 추출 함수
        def get_similar_books(idx, sim_matrix, top_n = 10):
            sim_scores = list(enumerate(sim_matrix[idx]))
            sim_scores = sorted(sim_scores, key = lambda x: x[1], reverse = True)
            sim_scores = [score for score in sim_scores if score[0] != idx]  # 자기 자신 제외
            sim_scores = sim_scores[:top_n]  # 상위 top_n개
            similar_indices = [i[0] for i in sim_scores]
            return similar_indices

        # 6. 선택된 책의 id를 기반으로 유사한 책 추천
        similar_books = get_similar_books(book_idx, cosine_sim)

        # 7. 추천된 책 정보 반환
        recommend_books = [books[idx] for idx in similar_books]
        data = [
            {
                "title": book.title,
                "author": book.author,
                "link": book.link,
                "cover": book.cover,
                "description": book.description
            } for book in recommend_books
        ]

        # 8. 추가 - 랜덤 선택 된 필터링 도서 제목 반환
        filtered_book_title = next(book.title for book in books if book.id == select_one_book_id)

        return JsonResponse(data = {"recommend_books": data, "filtered_book": filtered_book_title}, safe = False)