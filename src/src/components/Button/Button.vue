<template>
  <v-btn
    elevation="2"
    rounded
    color="#228B22"
    class="white--text text-none text-h5"
    v-bind="$attrs"
    @click="emit"
  >
    <slot></slot>
  </v-btn>
</template>

<script src="./Button.js"></script>

<style>
</style>