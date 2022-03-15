<template>
  <v-app class="d-flex">
    Base project
    <router-view/>
  </v-app>
</template>

<script>
  export default {
    name: "App"
  }
</script>

<style>
  #app {
    background: #E5E5E5;
    color: #121214;
  }

  .toasted-font {
    font-family: "Roboto", sans-serif;
  }

  .v-card__text, .v-card__title {
    word-break: normal !important;
  }
</style>
