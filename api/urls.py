from django.urls import path
from .views import *

app_name = "api"

# domain.com/api/
urlpatterns = [
    # 계정
    path("login/", ApiLoginView.as_view(), name = "login"),
    path("logout/", ApiLogoutView.as_view(), name = "logout"),
    path("me/", ApiMeView.as_view(), name = "me"),
    path("account/create/", ApiRegisterView.as_view(), name = "register"),
]