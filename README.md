# 📝 Chackit 프로젝트
<p align="center">
  <img src="https://github.com/user-attachments/assets/d96471cb-15a0-4921-8b06-13131258447a">
</p>

- [💡 Chackit 프로젝트 기획서](https://ahram-jeong.notion.site/Chack-it-138ef17d41af4200b659c7520a56dc3d?pvs=4)</br>
### 1. 개요
✔ **Python-Django**와 Vue.js, 머신러닝을 구현한 독서 기록 및 도서 추천 SPA 개인 프로젝트
### 2. 수행 기간
📅 2024년 7월 19일 (금) ~ 2024년 8월 16일 (금)
### 3. 개발 환경
> #### OS
> <img src="https://img.shields.io/badge/windows-0078D4?style=for-the-badge&logo=windows&logoColor=white">

> #### IDE
> <img src="https://img.shields.io/badge/PyCharm-000?style=for-the-badge&logo=pycharm&logoColor=white"><img src="https://img.shields.io/badge/WebStorm-24C8D8?style=for-the-badge&logo=WebStorm&logoColor=white">

> #### RDBMS
> <img src="https://img.shields.io/badge/SQLite-%2307405e?style=for-the-badge&logo=sqlite&logoColor=white">

> #### VCS
> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

> #### Skills
> <img src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=Python&logoColor=ffdd54"><img src="https://img.shields.io/badge/django-092E20?style=for-the-badge&logo=django&logoColor=white"><br/><img src="https://img.shields.io/badge/scikit--learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white"><br/><img src="https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=Vue.js&logoColor=white"><img src="https://img.shields.io/badge/Vuetify-1867C0?style=for-the-badge&logo=Vuetify&logoColor=white"><img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"><br/><img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"><img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">

> #### etc.
> <img src="https://img.shields.io/badge/postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white"><img src="https://img.shields.io/badge/Anaconda-%2344A833?style=for-the-badge&logo=anaconda&logoColor=white"><img src="https://img.shields.io/badge/jupyter-%23FA0F00?style=for-the-badge&logo=jupyter&logoColor=white">
### 4. 주요 기능
> #### 회원
>- 회원 가입/탈퇴, 회원 정보 변경
>- 로그인, 로그아웃
> #### 독서 기록
>- 독서 기록 등록/조회/수정/삭제
>- 도서 검색
>- 도서 상세 정보
> #### 도서 추천
>- 평점 기반 도서 추천
>    - 사용자의 리뷰 평점이 **3점 이상**인 도서에 대한 머신러닝 알고리즘 적용
>    - **머신러닝**의 콘텐츠 기반 필터링 활용, 추천 알고리즘 구현
### 5. URL 설계
|  | URL | View | 기능 |
|---|:---|:---|:---|
| `home` | / | IndexView | 홈 |
| `user` | /api/login | ApiLoginView | 로그인 |
|  | /api/logout | ApiLogoutView | 로그아웃 |
|  | /api/me | ApiMeView | 인증 정보 확인 |
|  | /api/account/create | ApiRegisterView | 회원 가입 |
|  | /api/account/<<int:pk>> | ApiUserDetailView | 회원 정보 |
|  | /api/account/<<int:pk>>/update | ApiUserUpdateView | 회원 정보 수정 |
|  | /api/account/<<int:pk>>/delete | ApiUserDeleteView | 회원 탈퇴 |
| `book` | /api/book/search | ApiSearchListView | 도서 검색 |
|  | /api/book/<<int:pk>> | ApiBookDetailView | 도서 상세 정보 |
|  | /api/book/recommend | ApiRecommendView | 맞춤 도서 추천 |
| `review` | /api/review/create | ApiReviewCreateView | 독서 기록 등록 |
|  | /api/review/list | ApiReviewListView | 독서 기록 리스트 |
|  | /api/review/<<int:pk>> | ApiReviewDetailView | 독서 기록 상세 정보 |
|  | /api/review/<<int:pk>>/update | ApiReviewUpdateView | 독서 기록 수정 |
|  | /api/review/<<int:pk>>/delete | ApiReviewDeleteView | 독서 기록 삭제 |
### 6. 사용 기술
>- Python 3.12
>- Django 5.0.7
>- scikit-learn
>- SQLite
>- Vue.js 3.2
>- Vuetify 3.0
>- Axios
>- Javascript
>- HTML, CSS
