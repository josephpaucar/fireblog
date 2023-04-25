<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import background from '../assets/background.png'
import { useFirebaseAuth } from 'vuefire'
import { signInWithEmailAndPassword } from '@firebase/auth'

const user = ref({
  email: '',
  password: ''
})
const auth = useFirebaseAuth()
const router = useRouter()

async function signInToFirebase() {
  signInWithEmailAndPassword(auth, user.value.email, user.value.password)
    .then((userCredential) => {
      console.log(userCredential.user.uid)
      router.push({ name: 'home'})
    })
    .catch((error) => {
      const errorCode = error.code
      console.log("🚀 ~ file: LoginView.vue:21 ~ signInToFirebase ~ errorCode:", errorCode)
      const errorMessage = error.message
      console.log("🚀 ~ file: LoginView.vue:23 ~ signInToFirebase ~ errorMessage:", errorMessage)
    })
}
</script>

<template>
  <div id="login" class="font-quicksand ">
    <div class="relative h-screen form-wrap w-full md:w-2/5 flex items-center">
      <form action="" class="login w-4/5 mx-auto">
        <p class="text-center mb-2">
          Don't have an account?
          <router-link class="font-medium text-indigo-600 hover:text-indigo-500" :to="{name: 'register'}">Register</router-link>
        </p>
        <h2 class="text-center mb-6 text-3xl font-bold tracking-tight text-gray-900">Login to FireBlogs</h2>
        <div class="inputs my-4">
          <div class="rounded-md max-w-[300px] mx-auto">
            <label for="email-address" class="sr-only">Email address</label>
            <input 
              id="email-address" 
              name="email" 
              type="email" 
              autocomplete="email" 
              required 
              class="mb-2 relative block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
              placeholder="Email address" 
              v-model="user.email">
          </div>
          <div class="rounded-md max-w-[300px] mx-auto">
            <label for="password" class="sr-only">Password</label>
            <input 
              id="password" 
              name="password" 
              type="password" 
              autocomplete="current-password" 
              required 
              class="relative block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
              placeholder="Password" 
              v-model="user.password">
          </div>
        </div>

        <div class="text-sm text-center mb-2">
          <router-link :to="{name: 'forgotPassword'}" class="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</router-link>
        </div>

        <button 
          @click.prevent="signInToFirebase"
          type="submit" 
          class="flex w-auto mx-auto justify-center rounded-md bg-indigo-600 px-5 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Sign in
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
  #login {
    @apply block md:flex md:items-center h-screen;

    .angle {
      @apply hidden md:block absolute bg-white rotate-3 w-[60px] top-[-20px] right-[-30px];
      height: calc(100vh + 19px);
    }
  }
</style>