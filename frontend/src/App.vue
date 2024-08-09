<template>
  <v-app id="inspire">
    <v-app-bar app clipped-left>
      <v-app-bar-title>📖 Chack-it!</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <!--  -->
      <HelloWorld/>
    </v-main>
    <v-footer app>
      <span>&copy; 2024 Jeong-ahram</span>
    </v-footer>
  </v-app>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  components : { HelloWorld },

  data: () => ({

  }),
}
</script>