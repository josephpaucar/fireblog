<script setup>
import { RouterView } from 'vue-router'
import AppNavigation from './components/AppNavigation.vue';
import AppFooter from './components/AppFooter.vue';
</script>

<template>
  <AppNavigation />

  <RouterView />

  <AppFooter />
</template>

<style>
.link {
  @apply font-medium py-2 transition-all duration-300 ease-out;
}
.link:hover {
  @apply text-blue-400;
}
</style>
