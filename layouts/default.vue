<template>
  <v-app light>
    <v-main>
      <v-container class="h-100">
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <div class="text-center">&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
        fixed: false,
    }
  }
}
</script>

<style>
  footer {
    text-align: center;
  }
  .h-100 {
    height: 100%;
  }
</style>
