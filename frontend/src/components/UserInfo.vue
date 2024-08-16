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
            <v-list-item-title>
              <v-btn elevation="0">정보 수정</v-btn>
            </v-list-item-title>
            <v-list-item-title>
              <v-btn @click="deleteUser()" elevation="0">계정 삭제</v-btn>
            </v-list-item-title>
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
    userId: document.getElementById("user-id").value,
  }),

  methods: {
    // 로그아웃
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
    },

    // 계정 삭제
    deleteUser() {
      if (confirm("계정을 삭제하시겠습니까?")) {
        console.log("deleteUser() 호출");
        axios.delete(`/api/account/${this.userId}/delete/`)
            .then(res => {
              console.log("deleteUser() 성공", res);
              alert("삭제 되었습니다.");
              window.location.href = "/";
            }).catch(err => {
          console.log("deleteUser() 실패", err);
        });
      }
    },
  }
}
</script>

<style scoped>
p {
  text-align: right;
  padding-right: 20px;
}
</style>