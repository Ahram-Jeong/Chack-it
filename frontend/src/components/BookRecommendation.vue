<template>
  <div class="recommended-books">
    <div class="header">
      <h2>추천 도서</h2>
      <v-btn
        color="black"
        icon="mdi-refresh"
        class="scaled-btn"
        @click="refresh()"
    ></v-btn>
    </div>
    <v-text v-if="recommend_books.length === 0">
      더 많은 독서 기록이 쌓여야 해요! 🤗
    </v-text>
    <div v-else>
      <h4>재밌게 읽은 “{{ filtered_book }}” 책과 비슷한 도서</h4>
      <v-row class="books-container">
        <v-col v-for="book in recommend_books" :key="book.id" class="book">
          <v-card class="mx-auto" max-width="344" hover :href="book.link">
            <v-col>
              <v-img :src="book.cover" alt="book-img" height="125px"></v-img>
            </v-col>
            <v-col>
              <v-card-title v-text="book.title"></v-card-title>
              <v-card-subtitle>{{ book.author }}</v-card-subtitle>
              <v-card-text class="review-content">{{ trimDescription(book.description) }}</v-card-text>
            </v-col>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    recommend_books: [],
    filtered_book: "",
  }),

  created() {
    this.refresh();
  },

  methods: {
    refresh() {
      console.log("refresh() 호출");
      axios.get("/api/book/recommend/")
          .then(res => {
            console.log("refresh() 성공", res);
            this.recommend_books = res.data.recommend_books;
            this.filtered_book = res.data.filtered_book;
          }).catch(err => {
        console.log("refresh() 실패", err);
      });
    },
    // 줄거리 생략
    trimDescription(description, maxLength = 40) {
      if (description.length > maxLength) {
        return description.substring(0, maxLength) + "...";
      }
      return description;
    },
  }
}
</script>

<style scoped>
.recommended-books {
  padding: 10px;
  margin: 20px;
  margin-bottom: 30px;
}

.header {
  text-align: left;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.books-container {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
}

.book {
  flex: 0 0 auto;
  margin-right: 10px;
  text-align: left;
  width: 250px;
  padding: 20px;
}

.scaled-btn {
  transform: scale(0.7);
  transform-origin: center;
}
</style>