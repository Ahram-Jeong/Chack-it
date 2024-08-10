<template>
  <v-app id="inspire">
    <v-app-bar app clipped-left class = "custom-app-bar">
      <v-app-bar-title class = "custom-app-bar-title">📖 Chackit</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <!-- contents -->
      <AccountForm v-if="!isLoggedIn" @login-success="loginState()" />
      <BookReviews v-if="isLoggedIn" />
    </v-main>
    <v-footer app>
      <span>&copy; 2024 Chackit from Jeong-Ahram</span>
    </v-footer>
  </v-app>
</template>

<script>
import AccountForm from "@/components/AccountForm.vue";
import BookReviews from "@/components/BookReviews.vue";

export default {
  components : {
    AccountForm,
    BookReviews,
  },

  data: () => ({
    isLoggedIn: false, // 최초 로그인 상태
  }),

  methods: {
    loginState() {
      this.isLoggedIn = true; // 로그인 성공 시
    },
  },
}
</script>