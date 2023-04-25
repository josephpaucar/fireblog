<script setup>
import background from '../assets/background.png'
import ModalAlert from '../components/ModalAlert.vue';
import LoadingState from '../components/LoadingState.vue';
import { ref } from 'vue';
import { useFirebaseAuth } from 'vuefire'
import { sendPasswordResetEmail } from '@firebase/auth'

const auth = useFirebaseAuth()
const email = ref(null)
const modalActive = ref(false)
const modalMessage = ref("")
const loading = ref(false)

const closeModal = () => {
  modalActive.value = !modalActive.value
  email.value = ""
}

function resetPassword() {
  loading.value = true
  sendPasswordResetEmail(auth, email.value)
    .then(() => {
      modalMessage.value = "If your account exists, you will receive an email"
      loading.value = false
      modalActive.value = true
    })
    .catch((error) => {
      const errorMessage = error.message
      modalMessage.value = errorMessage
      loading.value = false
      modalActive.value = true
    })
}
</script>

<template>
  <div id="forgot-password" class="font-quicksand relative">
    <ModalAlert :message="modalMessage" v-if="modalActive" v-on:close-modal="closeModal" />
    <LoadingState v-if="loading" />
    <div class="relative h-screen form-wrap w-full md:w-2/5 flex items-center">
      <form action="" class="login w-4/5 mx-auto">
        <p class="text-center mb-2">
          Back to
          <router-link class="font-medium text-indigo-600 hover:text-indigo-500" :to="{name: 'login'}">Login</router-link>
        </p>
        <h2 class="text-center mb-2 text-3xl font-bold tracking-tight text-gray-900">Reset password</h2>
        <p class="text-center mb-6">
          Forgot your password? Enter your email to reset it
        </p>
        <div class="inputs my-4">
          <div class="rounded-md max-w-[300px] mx-auto">
            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" name="email" type="email" autocomplete="email" required class="mb-2 relative block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Email address" v-model="email">
          </div>
        </div>

        <button 
          @click.prevent="resetPassword"
          type="submit" 
          class="flex w-auto mx-auto justify-center rounded-md bg-indigo-600 px-5 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Reset password
        </button>
        
      </form>
      <div class="angle"></div>
    </div>
    <div class="hidden md:block background-img w-full md:w-3/5">
      <img class="h-screen w-full object-cover" :src="background" alt="Background image">
    </div>
  </div>
  
</template>

<style lang="scss" scoped>
  #forgot-password {
    @apply block md:flex md:items-center h-screen;

    .angle {
      @apply hidden md:block absolute bg-white rotate-3 w-[60px] top-[-20px] right-[-30px];
      height: calc(100vh + 19px);
    }
  }
</style>