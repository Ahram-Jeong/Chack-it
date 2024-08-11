from django.contrib.auth import login, get_user, logout
from django.contrib.auth.views import LoginView, LogoutView
from django.http import JsonResponse
from django.utils.decorators import method_decorator
from django.views import View
from django.views.decorators.cache import never_cache
from django.views.generic import ListView
from django.views.generic.edit import BaseCreateView

from book.models import Book
from users.forms import CustomUserCreationForm


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
        books = self.get_queryset()
        data = [{
            "id": book.id,
            "title": book.title,
            "author": book.author,
            "publisher": book.publisher} for book in books]
        return JsonResponse(data = data, safe = False, status = 200)