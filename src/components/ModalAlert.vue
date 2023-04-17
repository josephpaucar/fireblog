<script setup>
const props = defineProps({
  message: {
    type: String
  }
})

</script>
  
<template>
  <div class="modal">
    <div class="modal-content">
      <p>{{ props.message }}</p>
      <button @click="$emit('close-modal')">Close</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .modal {
    @apply flex justify-center items-center z-50 absolute w-full h-full top-0 bg-slate-700 opacity-95;

    .modal-content {
      @apply flex flex-col justify-center rounded-sm w-[300px] py-[40px] px-[30px] bg-white;

      p {
        @apply text-center;
      }

      button {
        @apply self-center;
      }
    }
  }
</style>