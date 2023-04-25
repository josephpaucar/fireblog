<script setup>
import { ref, watch } from 'vue';
import { RouterView, useRoute } from 'vue-router'
import AppNavigation from './components/AppNavigation.vue';
import AppFooter from './components/AppFooter.vue';
import { useProfileStore } from '@/stores/profile.js'
import { onAuthStateChanged, getAuth } from "firebase/auth";

const profileStore = useProfileStore()
const auth = getAuth()

const hideNavigation = ref(null)
const route = useRoute()

const checkRoute = () => {
  (route.name === 'login' || route.name === 'register' || route.name === 'forgotPassword') ? hideNavigation.value = true : hideNavigation.value = false
}

watch(route, checkRoute)

onAuthStateChanged(auth, (user) => {
  if(user) {
    profileStore.getCurrentUser(user.uid)
  }
})

console.log(profileStore.profile)

</script>

<template>
  <AppNavigation v-if="!hideNavigation" />

  <RouterView />

  <AppFooter v-if="!hideNavigation" />
</template>

<style>
.link {
  @apply font-medium py-2 transition-all duration-300 ease-out;
}
.link:hover {
  @apply text-blue-400;
}
</style>
