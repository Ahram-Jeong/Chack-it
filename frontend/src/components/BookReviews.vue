<template>
  <!-- 리뷰 리스트 -->
  <div class="review-section">
    <div class="header-container">
      <div>
        <h2>내 서재</h2>
        <h4>Book Review</h4>
      </div>
      <button @click="dialog1 = true" class="btn btn-basic" type="button">글쓰기</button>
    </div>
    <!-- 작성 된 리뷰 목록 -->
    <v-text v-if="reviews.length === 0">
      읽으신 책 리뷰를 등록해주세요.
    </v-text>
    <v-row>
      <v-col v-for="rv in showReviews" :key="rv.id">
        <v-card class="mx-auto" max-width="344" hover @click="detailReview(rv)">
          <v-col>
            <v-img :src="rv.book__cover" alt="book-img" height="125px"></v-img>
          </v-col>
          <v-col>
            <v-card-title v-text="rv.book__title"></v-card-title>
            <v-card-subtitle>{{ rv.book__author }}</v-card-subtitle>
            <v-rating v-model="rv.review_rating" readonly></v-rating>
            <v-card-text class="review-content">{{ rv.review_content }}</v-card-text>
          </v-col>
        </v-card>
      </v-col>
    </v-row>
    <div class="btn-more-div">
      <button v-if="reviews.length > showReviews.length"
              @click="loadMore()"
              class="btn-more"
              type="button">더보기</button>
    </div>
  </div>

  <!-- 리뷰 상세 조회 -->
  <v-dialog v-model="dialog4" class="mx-auto" max-width="500">
    <v-card class="mx-auto" style="width: 500px;">
      <v-col>
        <v-img :src="selectedReview.cover" alt="book-img" height="125px"></v-img>
      </v-col>
      <v-card-title v-text="selectedReview.title"></v-card-title>
      <v-card-subtitle>{{ selectedReview.author }}</v-card-subtitle>
      <v-card-subtitle>{{ selectedReview.publisher }}</v-card-subtitle>
      <!-- 독서 기록 폼 -->
      <v-form id="review-form" ref="reviewForm">
        <v-rating v-model="selectedReview.review_rating" hover></v-rating>
        <v-container>
          <v-textarea label="Book Review" v-model="selectedReview.review_content"></v-textarea>
        </v-container>
        <v-card-actions class="justify-center">
          <v-btn class="text-grey text-decoration-none" @click="closeDialog4()">취소</v-btn>
          <v-btn class="text-white bg-black" @click="updateReview(selectedReview)">수정</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>

  <!-- 글쓰기 -->
  <v-dialog v-model="dialog1" class="mx-auto" max-width="500">
    <v-card>
      <v-toolbar color="white" flat>
        <v-toolbar-title>도서 검색</v-toolbar-title>
        <v-btn icon="mdi-magnify" @click="searchBook()"> </v-btn>
      </v-toolbar>

      <v-card-title class="pb-0">
        <v-text-field
            ref="searchField"
            v-model="searchKeyword"
            label="도서명 입력"
            hide-details
            single-line
            class="white--text"
            style="background-color: white;"
            @keyup.enter="searchBook()"
        ></v-text-field>
      </v-card-title>

      <!-- 도서 검색 결과 -->
      <v-list>
        <v-list-item v-for="book in books" :key="book.id" @click="detailBook(book)">
          <v-list-item-title v-text="book.title" style="font-weight: bold;"></v-list-item-title>
          <v-list-item-subtitle>{{ book.author }}, {{ book.publisher }}</v-list-item-subtitle>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-card-actions class="pa-2" style="background-color: white;">
        <v-spacer></v-spacer>
        <button class="text-grey text-decoration-none" @click="closeDialog1()">취소</button>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <!-- 도서 상세 정보 -->
  <v-dialog v-model="dialog2" class="mx-auto" max-width="500" persistent>
    <v-card class="mx-auto" style="max-width: 500px;">
      <v-img
          :aspect-ratio="1"
          :src="selectedBook.cover"
          alt="book-img"
          class="bg-white"
          style="height: 125px; margin-top: 20px;"
      ></v-img>

      <v-card-title style="font-weight: bold;">{{ selectedBook.title }}</v-card-title>

      <v-card-subtitle>{{ selectedBook.author }}</v-card-subtitle>
      <v-card-subtitle>{{ selectedBook.publisher }}</v-card-subtitle>

      <v-card-text>
        {{ selectedBook.description }}
      </v-card-text>
      <v-card-actions>
        <v-btn class="text-grey text-decoration-none" @click="closeDialog2()">취소</v-btn>
        <v-btn class="text-white bg-black" @click="createReview(selectedBook)">작성</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <!-- 독서 기록 작성 -->
  <v-dialog v-model="dialog3" class="mx-auto" max-width="500">
    <v-card class="mx-auto" style="width: 500px;">
      <v-card-title style="font-weight: bold;">{{ selectedBook.title }}</v-card-title>
      <v-card-subtitle>{{ selectedBook.author }}</v-card-subtitle>
      <v-card-subtitle>{{ selectedBook.publisher }}</v-card-subtitle>
      <!-- 독서 기록 폼 -->
      <v-form id="review-form" ref="reviewForm">
        <v-rating v-model="rating" hover></v-rating>
        <v-container>
          <v-textarea label="Book Review" v-model="review"></v-textarea>
        </v-container>
        <v-card-actions class="justify-center">
          <v-btn class="text-grey text-decoration-none" @click="closeDialog3()">취소</v-btn>
          <v-btn class="text-white bg-black" @click="postReview(bookId)">등록</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    rvCount: 5, // 더보기 카운드
    reviews: [], // 사용자 리뷰 리스트
    selectedReview: {}, // 상세 리뷰
    searchKeyword: "",
    books: [], // 도서 검색 결과
    selectedBook: {}, // 선택 된 도서 정보
    dialog1: false, // 검색 창
    dialog2: false, // 도서 상세정보
    dialog3: false, // 리뷰 작성
    dialog4: false, // 리뷰 조회
    rating: 0, // 평점
    review: "", // 리뷰
    bookId: "",
    userId: document.getElementById("user-id").value,
  }),

  mounted() {
    // 사용자 리뷰 리스트 출력
    this.fetchReviews();
  },

  computed: {
    // 더보기
    showReviews() {
      return this.reviews.slice(0, this.rvCount);
    }
  },

  methods: {
    // 추가 더보기
    loadMore() {
      this.rvCount += 5;
    },

    // dialog 취소
    closeDialog1() {
      this.dialog1 = false;
      this.searchKeyword = "";
      this.books = [];
    },

    closeDialog2() {
      this.dialog2 = false;
      this.dialog1 = true;
    },

    closeDialog3() {
      this.dialog3 = false;
      this.dialog2 = true;
      this.rating = 0;
      this.review = "";
    },

    closeDialog4() {
      this.dialog4 = false;
    },

    // 도서 검색
    searchBook() {
      console.log("searchBook() 호출");
      axios.get("/api/book/search/", {
        params: {
          keyword: this.searchKeyword,
        }
      }).then(res => {
          console.log("searchBook() 성공", res);
          this.books = res.data;
          if(this.books == ""){
            alert("검색 결과가 없습니다.");
          }
      }).catch(err => {
          console.log("searchBook() 실패", err);
      });
    },

    // 도서 상세 정보
    detailBook(book) {
      console.log("detailBook() 호출");
      axios.get(`/api/book/${book.id}/`)
          .then(res => {
          console.log("detailBook() 성공", res);
          this.selectedBook = res.data;
          this.dialog1 = false;
          this.dialog2 = true;
          }).catch(err => {
            console.log("detailBook() 실패", err);
          });
    },

    // 책 리뷰 작성
    createReview(selectedBook) {
      this.dialog3 = true;
      this.bookId = selectedBook.id;
    },

    // 책 리뷰 등록
    postReview(bookId) {
      console.log("postReview() 호출");
      axios.post("/api/review/create/", {
        review_rating: this.rating,
        review_content: this.review,
        book_id: bookId,
        user_id: this.userId,
      }).then(res => {
        console.log("postReview() 성공", res);
        this.selectedBook = res.data;
        alert("작성 완료!🎉");
        this.dialog1 = false;
        this.dialog2 = false;
        this.dialog3 = false;
        this.searchKeyword = "";
        this.books = [];
        this.rating = 0;
        this.review = "";
        this.bookId = "";
        // this.fetchReviews();
        window.location.href = "/";
      }).catch(err => {
        console.log("postReview() 실패", err);
        if (err.response.data.error == "EMPTY ERROR") {
          alert("내용을 입력해주세요😅");
        }
      });
    },

    // 사용자 리뷰 리스트
    fetchReviews() {
      console.log("fetchReviews() 호출");
      axios.get("/api/review/list/")
          .then(res => {
            console.log("fetchReviews() 성공", res);
            this.reviews = res.data.reviews;
          }).catch(err => {
            console.log("fetchReviews() 실패", err);
          });
      },

    // 리뷰 상세 조회
    detailReview(rv) {
      console.log("detailReview() 호출");
      axios.get(`/api/review/${rv.id}/`)
          .then(res => {
            console.log("detailReview() 성공", res);
            this.selectedReview = res.data;
            this.dialog4 = true;
          }).catch(err => {
        console.log("detailReview() 실패", err);
      });
    },

    updateReview() {

    },
  }
}
</script>

<style scoped>
.review-section {
  margin: 20px;
  padding: 10px;
}

.header-container {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: space-between;
}

.header-container h2 {
  margin-right: 10px;
}

button {
  margin-top: 20px;
}

.btn-more {
  border: none;
  display: inline-block;
  padding: 15px 30px;
  border-radius: 50px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  background-color: #a3a3a3;
  color: #e1eef6;
}

.btn-more:hover {
  background-color: #fff;
  color: #000;
}

.btn-more-div {
  display: flex;
  justify-content: center;
}

.review-content {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
