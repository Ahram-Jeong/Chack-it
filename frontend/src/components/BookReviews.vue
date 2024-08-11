<template>
  <!-- 리뷰 리스트 -->
  <div class="review-section">
    <div class="header-container">
      <div>
        <h2>내 서재</h2>
        <h4>Review</h4>
      </div>
      <button @click="dialog1 = true" class="btn btn-basic" type="button">글쓰기</button>
    </div>
    <div class="reviews-container">
      <div class="review" v-for="review in displayedReviews" :key="review.title">
        <h3>{{ review.title }}</h3>
        <p>{{ review.body }}</p>
      </div>
    </div>
    <div class="btn-more-div">
      <button v-if="reviews.length > displayedReviews.length" @click="loadMore()" class="btn-more" type="button">더보기</button>
    </div>
  </div>

  <!-- 글쓰기 Dialog 1 -->
  <v-dialog v-model="dialog1" class="mx-auto" max-width="500">
    <v-card>
      <v-toolbar color="white" flat>
        <v-toolbar-title>도서 검색</v-toolbar-title>
        <v-btn icon="mdi-magnify" @click="bookSearch()"> </v-btn>
      </v-toolbar>

      <v-card-title class="pb-0">
        <v-text-field
            ref="searchField"
            v-model="search"
            label="도서명 입력"
            hide-details
            single-line
            class="white--text"
            style="background-color: white;"
        ></v-text-field>
      </v-card-title>

      <v-list>
        <v-list-item v-for="item in items" :key="item.text">
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-card-actions class="pa-2" style="background-color: white;">
        <v-spacer></v-spacer>
        <button class="text-grey text-decoration-none" @click="dialog1 = false">취소</button>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    reviews: [
      { title: "Title 1", body: "Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story." },
      { title: "Title 2", body: "Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story." },
      { title: "Title 3", body: "Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story." },
      { title: "Title 4", body: "Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story." },
      { title: "Title 5", body: "Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story." },
      { title: "Title 6", body: "Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story." },
      { title: "Title 7", body: "Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story." },
      { title: "Title 8", body: "Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story." },
      { title: "Title 9", body: "Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story." },
      { title: "Title 10", body: "Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story." },
      { title: "Title 11", body: "Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story." },
      { title: "Title 12", body: "Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story." },
      { title: "Title 13", body: "Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story." },
      { title: "Title 14", body: "Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story." },
    ],
    cnt: 0,
    showCount: 5,
    items: [
      {
        text: "WOODZ",
      },
      {
        text: "테스트",
      },
      {
        text: "Bonjour",
      },
    ],
    search: "",
    dialog1: false,
  }),

  computed: {
    displayedReviews() {
      return this.reviews.slice(0, this.showCount);
    }
  },

  methods: {
    loadMore() {
      this.showCount += 5;
    },

    // 도서 검색
    bookSearch() {

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

.reviews-container {
  display: flex;
  flex-wrap: wrap;
}

.review {
  flex: 1 0 20%; /* 1행 당 5개의 리뷰 */
  box-sizing: border-box;
  padding: 20px;
  text-align: left;
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
</style>
