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
</style>
