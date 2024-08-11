<template>
  <v-container>
    <v-card class="mx-auto px-5 py-10 mt-10" max-width="500">
      <h1 class="display-1 my-5" align="center">Chackit</h1>
      <v-form v-model="form" @submit.prevent="onSubmit" id = "login-form">
        <v-text-field
            v-model="username"
            name="username"
            :readonly="loading"
            :rules="[required]"
            class="mb-2"
            label="아이디"
            clearable
        ></v-text-field>

        <v-text-field
            v-model="password"
            name="password"
            :readonly="loading"
            :rules="[required]"
            label="비밀번호"
            placeholder="Enter your password"
            type="password"
            clearable
        ></v-text-field>

        <br />

        <v-btn
            :disabled="!form"
            :loading="loading"
            color="black white--text"
            size="large"
            type="submit"
            variant="elevated"
            block
            @click="login()"
        >
          로그인
        </v-btn>
      </v-form>

      <v-card-text class="text-center">
        <button
            class="text-grey text-decoration-none"
            @click.stop="dialog = true"
        >
          회원가입
        </button>
      </v-card-text>
    </v-card>
  </v-container>

  <!-- ----------------------------------------------------------------------------------------------------------- -->
  <!-- 회원가입 dialog -->
  <v-dialog v-model="dialog" max-width="500">
    <v-card class="text-center pa-4">
      <h1 class="display-1 my-5" align="center">Join Us</h1>
      <v-form @submit.prevent="onSubmit" id="register-form" ref="registerForm">
        <v-text-field
            name="username"
            :readonly="loading"
            :rules="[required]"
            class="mb-2"
            label="아이디"
            placeholder="Enter your id"
            clearable
            :error-messages="errors.username"
        ></v-text-field>

        <v-text-field
            name="password1"
            :readonly="loading"
            :rules="[required]"
            label="비밀번호"
            placeholder="Enter your password"
            type="password"
            clearable
            :error-messages="errors.password1"
        ></v-text-field>
        <v-text-field
            name="password2"
            :readonly="loading"
            :rules="[required]"
            label="비밀번호 확인"
            placeholder="Enter your password"
            type="password"
            clearable
            :error-messages="errors.password2"
        ></v-text-field>

        <v-text-field
            name="email"
            :readonly="loading"
            :rules="[required]"
            label="이메일"
            placeholder="Enter your email"
            type="email"
            clearable
            :error-messages="errors.email"
        ></v-text-field>

        <br />

        <v-btn
            :loading="loading"
            color="black white--text"
            size="large"
            type="submit"
            variant="elevated"
            block
            @click="register()"
        >
          회원가입
        </v-btn>
        <v-card-text class="text-center">
          <button
              class="text-grey text-decoration-none"
              @click="dialog = false"
          >
            취소
          </button>
        </v-card-text>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";
// CSRF 토큰
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

export default {
  data: () => ({
    form: false,
    username: null,
    password: null,
    loading: false,
    dialog: false,
    me: {}, // 응답 user 정보
    errors: {}, // 회원가입 각 필드의 오류 메시지 저장
  }),

  methods: {
    onSubmit() {
      if (!this.form) return

      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    },
    required(v) {
      return !!v || 'Field is required'
    },

    // 로그인
    login() {
      console.log("login() 호출");
      const postData = new FormData(document.getElementById("login-form"));

      axios.post("/api/login/", postData)
          .then(res => {
            console.log("login() 성공", res);
            this.me = res.data; // Django에서 보내준 user 정보
            window.location.href = "/"; // 홈으로 리다이렉트
          })
          .catch(err => {
            console.log("login() 실패", err);
            alert("아이디, 비밀번호를 확인하세요.");
          });
    },

    // 회원가입
    register() {
      console.log("register() 호출");
      this.errors = {}; // 오류 메시지 초기화
      const postData = new FormData(document.getElementById("register-form"));

      axios.post("/api/account/create/", postData, {headers : {"X-CSRFToken": this.csrfToken}})
          .then(res => {
            console.log("register() 성공", res);
            console.log("username >> ", res.data.username);
            this.dialog = false; // dialog 창 닫기
          })
          .catch(err => {
            console.log("register() 실패", err);
            if (err.response && err.response.data.errors) {
              const errorData = err.response.data.errors;
              // 서버에서 받은 오류 메시지를 errors 필드에 할당
              this.errors.username = errorData.username ? errorData.username.map(e => e.message) : [];
              this.errors.password1 = errorData.password1 ? errorData.password1.map(e => e.message) : [];
              this.errors.password2 = errorData.password2 ? errorData.password2.map(e => e.message) : [];
              this.errors.email = errorData.email ? errorData.email.map(e => e.message) : [];
            } else {
              alert("회원가입 실패:(");
            }
          });
    },
  },
}
</script>