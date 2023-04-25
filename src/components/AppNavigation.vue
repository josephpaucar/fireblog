<script setup>
import { ref, watch, onMounted, computed } from 'vue';
import { useProfileStore } from '@/stores/profile.js'
import { signOut } from "firebase/auth";
import { useFirebaseAuth } from 'vuefire';

const profileStore = useProfileStore()
const auth = useFirebaseAuth()
const profileMenu = ref(false)
const mobile = ref(null)
const mobileNav = ref(false)
const windowWidth = ref(window.innerWidth)
const onWidthChange = () => windowWidth.value = window.innerWidth

window.addEventListener('resize', onWidthChange)

watch(windowWidth,
  (windowWidth) => {
    if (windowWidth < 768) {
      mobile.value = true
    } else {
      mobile.value = false
      mobileNav.value = false
    }
  }
)

onMounted(() => {
  windowWidth.value <= 750 ? mobile.value = true : mobile.value = false 
})

const toggleMobileNav = () => {
  mobileNav.value = !mobileNav.value
}

const toggleProfileMenu = () => {
  profileMenu.value = !profileMenu.value
}

const user = computed(() => profileStore.logedIn)

async function signOutOfFirebase() {
  signOut(auth)
    .then(() => {
      console.log('Logged out!')
      window.location.reload()
    })
    .catch((error) => {
      console.log(error)
    })
}
</script>

<template>
  <header class="py-3 md:py-6 bg-white shadow-md z-50 font-quicksand">
    <nav class="container px-3 mx-auto flex items-center justify-between">
      <div class="brand flex items-center">
        <RouterLink class="text-xl font-medium" :to="{ name: 'home' }">FireBlogs</RouterLink>
      </div>

      <div class="nav-links">
        <ul class="flex items-center" v-show="!mobile" >
          <li><router-link class="link ml-4" :to="{ name: 'home' }">Home</router-link></li>
          <li><router-link class="link ml-4" :to="{ name: 'blogs' }">Blogs</router-link></li>
          <li><router-link class="link ml-4" :to="{ name: 'about' }">Create Post</router-link></li>
          <li v-if="!user">
            <router-link class="link ml-4" :to="{ name: 'login' }">Login/Register</router-link>
          </li>
          <div v-if="user" class="relative ml-4">
            <span @click="toggleProfileMenu" class="cursor-pointer flex items-center justify-center w-[40px] h-[40px] rounded-full text-white bg-slate-800">{{ profileStore.profile.initials }}</span>
            <div v-show="profileMenu" class="absolute top-12 right-0 w-[250px] text-white bg-slate-800 shadow-md">
              <div class="flex items-center p-3 border-b border-b-white">
                <p class="w-[40px] h-[40px] bg-white text-slate-800 flex items-center justify-center rounded-full">{{ profileStore.profile.initials }}</p>
                <div class="right ml-6">
                  <p class="text-sm">{{ profileStore.profile.firstname }} {{ profileStore.profile.lastname }}</p>
                  <p class="text-xs">@{{ profileStore.profile.username }}</p>
                  <p class="text-xs">{{ profileStore.profile.email }}</p>
                </div>
              </div>
              <ul class="options p-4">
                <li>
                  <router-link class="link text-sm" :to="{ name: 'home' }">Profile</router-link>
                </li>
                <li>
                  <router-link class="link text-sm" :to="{ name: 'home' }">Admin</router-link>
                </li>
                <li>
                  <div 
                    @click="signOutOfFirebase"
                    class="cursor-pointer link text-sm">
                    Sign Out
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </ul>
        
      </div>

      <button v-show="mobile" @click="toggleMobileNav">
        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="bars" class="svg-inline--fa fa-bars fa-w-14 ml-4 h-5 w-5 hover:cursor-pointer" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill="currentColor" d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"></path>
        </svg>
      </button>
    </nav>
    
    <Transition name="mobile-nav">
      <ul v-show="mobileNav" class="p-7 w-[250px] flex flex-col fixed h-full top-0 left-0 bg-slate-600 text-white">
        <li class="mb-3"><router-link class="link" :to="{ name: 'home' }">Home</router-link></li>
        <li class="mb-3"><router-link class="link" :to="{ name: 'blogs' }">Blogs</router-link></li>
        <li class="mb-3"><router-link class="link" :to="{ name: 'about' }">Create Post</router-link></li>
        <li class="mb-3"><router-link class="link" :to="{ name: 'login' }">Login/Register</router-link></li>
      </ul>
    </Transition>
  </header>
</template>

<style scoped>
.mobile-nav-enter-active, .mobile-nav-leave-active{
  @apply transition-all duration-1000 ease-in-out;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
  @apply transform translate-x-[-250px];
}
</style>