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
    path("account/<int:pk>/delete/", ApiUserDeleteView.as_view(), name = "delete_user"),

    # 도서
    path("book/search/", ApiSearchListView.as_view(), name = "search_book"),
    path("book/<int:pk>/", ApiBookDetailView.as_view(), name = "detail_book"),
    # 도서 추천
    path("book/recommend/", ApiRecommendView.as_view(), name = "recommend_book"),
    
    # 리뷰
    path("review/create/", ApiReviewCreateView.as_view(), name = "create_review"),
    path("review/list/", ApiReviewListView.as_view(), name = "review_list"),
    path("review/<int:pk>/", ApiReviewDetailView.as_view(), name = "detail_review"),
    path("review/<int:pk>/update/", ApiReviewUpdateView.as_view(), name = "update_review"),
    path("review/<int:pk>/delete/", ApiReviewDeleteView.as_view(), name = "delete_review"),
]