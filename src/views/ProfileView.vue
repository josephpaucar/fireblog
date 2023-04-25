<script setup>
import { ref } from 'vue';
import ModalAlert from '../components/ModalAlert.vue';
import { useProfileStore } from '@/stores/profile.js'
import { getAuth } from "firebase/auth";

const auth = getAuth();
const modalMessage = ref("Changes were saved!")
const modalActive = ref(false)
const profileStore = useProfileStore()

function updateProfile () {
  profileStore.updateUserSettings(auth.currentUser.uid)
  modalActive.value = !modalActive.value
  if(!modalActive.value) window.location.reload()
}

const closeModal = () => { modalActive.value = !modalActive.value }
</script>

<template>
  <div class="profile">
    <ModalAlert v-if="modalActive" :message="modalMessage" v-on:close-modal="closeModal" />
    <div class="container py-14 px-6">
      <h2 class="text-center mb-4 font-light text-2xl">Account Settings</h2>
      <div class="rounded-sm shadow-md p-6 flex flex-col max-w-[600px] mx-auto my-6">
        <div class="self-center w-[80px] h-[80px] text-2xl bg-slate-800 text-white flex items-center justify-center rounded-full">
          {{ profileStore.profile.initials }}
        </div>
        <div class="flex self-center text-white bg-slate-800 text-sm py-2 px-6 rounded-sm my-4 text-center capitalize">
          <span>admin</span>
        </div>
        <div class="input">
          <label for="firstName">First Name:</label>
          <input 
            type="text" 
            id="firstName" 
            v-model="profileStore.profile.firstname" />
        </div>
        <div class="input">
          <label for="lastName">Last Name:</label>
          <input type="text" id="lastName" v-model="profileStore.profile.lastname" />
        </div>
        <div class="input">
          <label for="userName">User Name:</label>
          <input type="text" id="userName" v-model="profileStore.profile.username" />
        </div>
        <div class="input">
          <label for="email">Email:</label>
          <input disabled type="text" id="email" :value="profileStore.profile.email" />
        </div>
        <button @click="updateProfile">Save Changes</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .input {
    @apply my-3;

    label {
      @apply text-sm block pb-2;
    }

    input{
      @apply w-full border-none bg-[#f2f7f6] p-2 h-[50px];

      &:focus {
        @apply outline-none;
      }
    }
  }

  button {
    @apply self-center mt-5 text-white bg-slate-800 py-2 px-4;
  }
</style>