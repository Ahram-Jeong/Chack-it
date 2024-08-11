<template>
  <v-app id="inspire">
    <v-app-bar app clipped-left class = "custom-app-bar">
      <v-app-bar-title class = "custom-app-bar-title">📖 Chackit</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <!-- contents -->
      <AccountForm v-if="me.username == null" />
      <BookReviews v-else />
    </v-main>
    <v-footer app>
      <span>&copy; 2024 Chackit from Jeong-Ahram</span>
    </v-footer>
  </v-app>
</template>

<script>
import AccountForm from "@/components/AccountForm.vue";
import BookReviews from "@/components/BookReviews.vue";
import axios from "axios";

export default {
  components : {
    AccountForm,
    BookReviews,
  },

  data: () => ({
    me: {}, // 응답 user 정보
    csrfToken: "", // csrf_token
  }),

  created() {
    // index.html 접속 시, 로그인 인증 정보 가져오기
    this.getUserInfo();
  },

  mounted() {
    // 최초 csrf_token 가져오기
    this.csrfToken = document.getElementById("csrf_token").value;
  },

  methods: {
    // 로그인 인증 정보 가져오기
    getUserInfo() {
      console.log("getUserInfo() 호출");
      axios.get("/api/me")
          .then(res => {
            console.log("getUserInfo() 성공", res);
            this.me = res.data; // Django에서 보내준 user 정보
            console.log("me 데이터", this.me);
          })
          .catch(err => {
            console.log("getUserInfo() 실패", err);
            alert(err.response.status + " : " + err.response.statusText);
          });
    },
  },
}
</script>