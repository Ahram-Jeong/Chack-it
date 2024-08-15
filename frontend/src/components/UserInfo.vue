<template>
  <div>
    <p>
      ☕안녕하세요, {{ username }} 님!
      <v-menu>
        <!-- 회원 정보 -->
        <template v-slot:activator="{ props }">
          <v-btn icon="mdi-dots-vertical" v-bind="props" style="margin: 10px 10px"></v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title>정보 수정</v-list-item-title>
            <v-list-item-title>계정 삭제</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- 로그아웃 -->
      <v-btn icon @click="logout()">
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    username: document.getElementById("username").value,
  }),

  methods: {
    logout() {
      console.log("logout() 호출");
      axios.get("/api/logout/")
          .then(res => {
            console.log("logout() 성공", res);
            this.username = null
            window.location.href = "/"; // 홈으로 리다이렉트
          })
          .catch(err => {
            console.log("logout() 실패", err);
          });
    }
  }
}
</script>

<style scoped>
p {
  text-align: right;
  padding-right: 20px;
}
</style>