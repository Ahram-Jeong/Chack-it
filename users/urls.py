from django.urls import path
from .views import *

app_name = "users"

# domain.com/users/
urlpatterns = [
    path("", IndexView.as_view(), name = "index")
]