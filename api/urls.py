from django.urls import path
from .views import *

app_name = "api"

# domain.com/api/
urlpatterns = [
    path("login/", ApiLoginView.as_view(), name = "login"),
]