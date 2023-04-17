<script setup>
</script>

<template>
  <div class="loading">
    <span></span>
  </div>
</template>

<style lang="scss" scoped>
  .loading {
    @apply top-0 z-50 h-full w-full bg-slate-600 opacity-50 fixed flex justify-center items-center;

    @keyframes spin {
      to {
        transform: rotateZ(360deg);
      }
    }

    span {
      @apply block w-[60px] h-[60px] mx-auto border-4 border-solid border-transparent border-t-white border-b-white rounded-full;
      animation: spin ease 1000ms infinite;
    }
  }
</style>