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
              <v-btn @click="getUser()" elevation="0">정보 수정</v-btn>
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

  <!-- 회원 정보 수정 -->
  <v-dialog v-model="dialog" max-width="500">
    <v-card class="text-center pa-4">
      <div style="margin-bottom: 10px">
        <h3>비밀번호 변경</h3>
      </div>
      <v-text-field
          name="username"
          class="mb-2"
          style="pointer-events: none;"
          label="아이디"
          readonly
          :model-value="user.username"
      ></v-text-field>

      <v-text-field
          name="email"
          label="이메일"
          type="email"
          style="pointer-events: none;"
          readonly
          :model-value="user.email"
      ></v-text-field>
      <v-form id="user-update-form" ref="userUpdateForm">
        <!-- 현재 비밀번호 -->
        <v-text-field
            name="old_password"
            label="현재 비밀번호"
            type="password"
            clearable
            v-model="oldPassword"
            :error-messages="errors.old_password"
        ></v-text-field>

        <!-- 새 비밀번호 -->
        <v-text-field
            name="new_password1"
            label="새 비밀번호"
            type="password"
            clearable
            v-model="newPassword1"
            :error-messages="errors.new_password1"
        ></v-text-field>
        <v-text-field
            name="new_password2"
            label="새 비밀번호 확인"
            type="password"
            clearable
            v-model="newPassword2"
            :error-messages="errors.new_password2"
        ></v-text-field>
        <br />
        <v-card-actions class="justify-center">
          <v-btn class="text-grey text-decoration-none" @click="dialog=false">취소</v-btn>
          <v-btn class="text-white bg-black" @click="updateUser(user.id)">수정</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    username: document.getElementById("username").value,
    userId: document.getElementById("user-id").value,
    dialog: false,
    // 회원 정보
    user: {},
    // 비밀번호 변경
    oldPassword: "",
    newPassword1: "",
    newPassword2: "",
    // 정보 수정 오류 시 메시지 저장 객체
    errors: {}
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

    // 계정 정보
    getUser() {
      this.dialog = true;
      console.log("getUser() 호출");
      axios.get(`/api/account/${this.userId}/`)
          .then(res => {
            console.log("getUser() 성공", res);
            this.user = res.data;
          }).catch(err => {
        console.log("getUser() 실패", err);
      });
    },

    // 정보 수정
    updateUser(userId) {
      console.log("updateUser() 호출");
      axios.put(`/api/account/${userId}/update/`, {
        old_password: this.oldPassword,
        new_password1: this.newPassword1,
        new_password2: this.newPassword2,
      }).then(res => {
        console.log("updateUser() 성공", res);
        alert("비밀번호 변경 완료");
        this.dialog = false;
        this.oldPassword = "";
        this.newPassword1 = "";
        this.newPassword2 = "";
        this.errors = {};
      }).catch(err => {
        console.log("updateUser() 실패", err);
        this.errors = err.response.data.errors;
      });
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