<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    post: {
        type: Object
    }
}) 
</script>

<template>
  <div class="blog-wrapper">
    <div class="blog-content">
        <h2>{{ props.post.title }}</h2>
    </div>
  </div>
</template>

<style scoped>
</style>