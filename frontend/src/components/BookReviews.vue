<template>
  <div class="review-section">
    <div class="header-container">
      <div>
        <h2>내 서재</h2>
        <h4>Review</h4>
      </div>
      <button @click="isOpen = true" class="btn btn-basic" type="button">글쓰기</button>
    </div>
    <div class="reviews-container">
      <div class="review" v-for="review in displayedReviews" :key="review.title">
        <h3>{{ review.title }}</h3>
        <p>{{ review.body }}</p>
      </div>
    </div>
    <div class="btn-more-div">
      <button v-if="reviews.length > displayedReviews.length" @click="loadMore" class="btn-more" type="button">더보기</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
      isOpen: false
    };
  },
  computed: {
    displayedReviews() {
      return this.reviews.slice(0, this.showCount);
    }
  },
  methods: {
    loadMore() {
      this.showCount += 5;
    }
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
