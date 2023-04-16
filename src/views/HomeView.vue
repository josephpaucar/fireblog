<script setup>
import { reactive } from 'vue';
import BlogPost from '../components/BlogPost.vue';
import BlogCard from '../components/BlogCard.vue';
import coding from '../assets/blogPhotos/coding.jpg'

const welcomeScreen = reactive([
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
    blogHTML: "This is a filter Title",
    blogCoverPhoto: "beautiful-stories"
  },
  {
    title: "This is a filter Title",
    blogHTML: "This is a filter Title",
    blogCoverPhoto: "designed-for-everyone"
  }
])

const sampleBlogCards = reactive([
  { blogTitle: "Blog Card #1", blogCoverPhoto: "stock-1", blogDate: "May 1, 2021" },
  { blogTitle: "Blog Card #2", blogCoverPhoto: "stock-2", blogDate: "May 1, 2021" },
  { blogTitle: "Blog Card #3", blogCoverPhoto: "stock-3", blogDate: "May 1, 2021" },
  { blogTitle: "Blog Card #4", blogCoverPhoto: "stock-4", blogDate: "May 1, 2021" },
])
</script>

<template>
  <div class="flex flex-col-reverse md:flex-row font-quicksand">
    <div class="bg-slate-800 text-white py-6 px-3 w-full md:w-2/5 md:flex md:flex-col md:justify-center md:px-[50px] lg:px-[100px] 2xl:px-[200px]">
      <h1 class="text-2xl md:text-3xl mb-2">{{ welcomeScreen[0].hero }}</h1>
      <p class="text-base tracking-wide">{{ welcomeScreen[0].blogPost }}</p>
      <router-link class="flex my-4 link" :to="{ name: 'about' }">LOGIN/REGISTER <span><svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="arrow-right" class="ml-2 w-5 h-5 svg-inline--fa fa-arrow-right fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M216.464 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887L209.393 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L233.434 36.465c-4.686-4.687-12.284-4.687-16.97 0z"></path></svg></span></router-link>
    </div>
    <div class="w-full md:w-3/5">
      <img :src="coding" alt="hero image">
    </div>
  </div>
  
  <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index" />

  <div class="blog-card-wrapper ">
    <div class="container mx-auto">
      <h3 class="blog-card-title">View More Recent Blogs</h3>
      <div class="blog-cards">
        <BlogCard :post="post" v-for="(post, index) in sampleBlogCards" :key="index"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.blog-card-wrapper {
  @apply my-[100px] px-3 font-quicksand;

  .blog-card-title {
    @apply text-2xl mb-5 font-medium;
  }

  .blog-cards {
    @apply grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4;
  }
}

</style>