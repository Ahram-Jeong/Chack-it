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
      <v-form @submit.prevent="onSubmit">
        <v-text-field
            name="username"
            :readonly="loading"
            :rules="[required]"
            class="mb-2"
            label="아이디"
            placeholder="Enter your id"
            clearable
        ></v-text-field>

        <v-text-field
            name="password1"
            :readonly="loading"
            :rules="[required]"
            label="비밀번호"
            placeholder="Enter your password"
            type="password"
            clearable
        ></v-text-field>
        <v-text-field
            name="password2"
            :readonly="loading"
            :rules="[required]"
            label="비밀번호 확인"
            placeholder="Enter your password"
            type="password"
            clearable
        ></v-text-field>

        <v-text-field
            name="email"
            :readonly="loading"
            :rules="[required]"
            label="이메일"
            placeholder="Enter your email"
            type="email"
            clearable
        ></v-text-field>

        <br />

        <v-btn
            :loading="loading"
            color="black white--text"
            size="large"
            type="submit"
            variant="elevated"
            block
            @click="join()"
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
            console.log("성공", res);
            this.me = res.data; // Django에서 보내준 user 정보
          })
          .catch(err => {
            console.log("실패", err);
            alert("아이디, 비밀번호를 확인하세요.");
          });
    },
    // 회원가입
    join() {

    },
  },
}
</script>