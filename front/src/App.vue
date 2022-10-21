<script setup lang="ts">
import { RouterView } from "vue-router";
import Clock from "./components/Clock.vue";
</script>

<template>
  <header>
    <div class="wrapper"><RouterView /></div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  font-weight: 500;
  text-align: center;
}
</style>
