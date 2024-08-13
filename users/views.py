from django.contrib.auth.mixins import LoginRequiredMixin
from django.http import JsonResponse


# Create your views here.

# Django 인증 시스템 사용
# LoginRequiredMixin : 로그인되어 있는지 여부만을 확인, 로그인 X일 경우 기본적으로 로그인 페이지로 리다이렉트,
# 간단하고 기본적인 접근 제한을 제공, 사용자가 로그인만 되어 있으면 해당 뷰에 접근할 수 있도록 허용할 때 사용

# UserPassesTestMixin : 사용자가 특정 조건을 만족하는지 여부를 확인, test_func()를 통해 더 세부적인 조건을 검사 가능,
# LoginRequiredMixin과 달리 다양한 조건 설정 가능, 로그인 여부 외에도 추가적인 사용자 조건을 검사
# 조건을 만족하지 않는 경우, 기본적으로 403 오류를 반환하거나, 커스텀 리다이렉트 처리 가능
class CustomLoginRequiredMixin(LoginRequiredMixin):
    def dispatch(self, request, *args, **kwargs):
        if not request.user.is_authenticated:
            data = {"error": "UNAUTHORISED!"}
            return JsonResponse(data = data, safe = True, status = 401)
        return super().dispatch(request, *args, **kwargs)