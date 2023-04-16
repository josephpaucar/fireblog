<script setup>
import { ref, reactive } from 'vue';
import BlogPost from '../components/BlogPost.vue';

const welcomeScreen = ref([
  {
    hero: "Welcome!",
    blogPost: "Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post!",
    welcomeScreen: true,
    photo: "coding",
  }
])

const sampleBlogPost = reactive([
  {
    title: "This is a filter Title",
    blogHHTML: "This is a filter Title",
    blogCoverPhoto: "beautiful-stories"
  },
  {
    title: "This is a filter Title",
    blogHHTML: "This is a filter Title",
    blogCoverPhoto: "designed-for-everyone"
  }
])
</script>

<template>

  <BlogPost :post="welcomeScreen" />
  <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index" />
</template>
