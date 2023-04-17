<script setup>
import { computed, onBeforeUnmount } from 'vue';
import BlogCard from '../components/BlogCard.vue';
import { useBlogsStore } from '@/stores/blogs.js'

const blogsStore = useBlogsStore()
const blogs = computed(() => blogsStore.blogs)

onBeforeUnmount(() => {
  blogsStore.editPost = false
})
</script>

<template>
  <h1 class="text-center text-2xl font-quicksand my-10">My Blog</h1>
  <div class="container font-quicksand mx-auto mt-[40px] mb-[100px]">
    <div class="flex justify-end px-3 py-5">
      <p class="mr-4">Toggle Editing Post</p>
      <div class="switch">
        <input id="switch-1" type="checkbox" class="switch-input" v-model="blogsStore.editPost" />
        <label for="switch-1" class="switch-label">Switch</label>
      </div>

    </div>

    <div class="blog-card-wrapper ">
      <div class="container mx-auto">
        <div class="blog-cards">
          <BlogCard :post="post" v-for="(post, index) in blogs" :key="index"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.blog-card-wrapper {
  @apply px-3 font-quicksand;

  .blog-card-title {
    @apply text-2xl mb-5 font-medium;
  }

  .blog-cards {
    @apply grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4;
  }
}

.switch {
  position: relative;
  display: inline-block;
}
.switch-input {
  display: none;
}
.switch-label {
  display: block;
  width: 48px;
  height: 24px;
  text-indent: -150%;
  clip: rect(0 0 0 0);
  color: transparent;
  user-select: none;
}
.switch-label::before,
.switch-label::after {
  content: "";
  display: block;
  position: absolute;
  cursor: pointer;
}
.switch-label::before {
  width: 100%;
  height: 100%;
  background-color: #dedede;
  border-radius: 9999em;
  -webkit-transition: background-color 0.25s ease;
  transition: background-color 0.25s ease;
}
.switch-label::after {
  top: 0;
  left: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.45);
  -webkit-transition: left 0.25s ease;
  transition: left 0.25s ease;
}
.switch-input:checked + .switch-label::before {
  background-color: #89c12d;
}
.switch-input:checked + .switch-label::after {
  left: 24px;
}

</style>