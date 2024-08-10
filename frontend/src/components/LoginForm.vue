<template>
  <v-container>
    <v-card class="mx-auto px-5 py-10 mt-10" max-width="500">
      <h1 class="display-1 my-5" align="center">Chackit</h1>
      <v-form v-model="form" @submit.prevent="onSubmit">
        <v-text-field
            v-model="username"
            :readonly="loading"
            :rules="[required]"
            class="mb-2"
            label="아이디"
            clearable
        ></v-text-field>

        <v-text-field
            v-model="password"
            :readonly="loading"
            :rules="[required]"
            label="비밀번호"
            placeholder="Enter your password"
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
        >
          로그인
        </v-btn>
      </v-form>

      <v-card-text class="text-center">
        <a
            class="text-grey text-decoration-none"
            href="#"
        >
          회원가입
        </a>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    form: false,
    username: null,
    password: null,
    loading: false,
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
  },
}
</script>