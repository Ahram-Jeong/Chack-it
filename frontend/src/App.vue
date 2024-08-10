<template>
  <v-app id="inspire">
    <v-app-bar app clipped-left class = "custom-app-bar">
      <v-app-bar-title class = "custom-app-bar-title">📖 Chackit</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <!-- contents -->
      <LoginForm/>
    </v-main>
    <v-footer app>
      <span>&copy; 2024 Chackit from Jeong-Ahram</span>
    </v-footer>
  </v-app>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";

export default {
  components : {
    LoginForm,
  },

  data: () => ({

  }),
}
</script>