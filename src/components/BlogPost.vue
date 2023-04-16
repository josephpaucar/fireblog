<script setup>
const imageUrl = (image) => {
  return new URL(`../assets/blogPhotos/${image}.jpg`, import.meta.url).href
}

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
      <p class="content-preview">{{ props.post.blogHTML }}</p>
      <router-link class="flex my-4 link" :to="{ name: 'about' }">View The Post <span><svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="arrow-right" class="ml-2 w-5 h-5 svg-inline--fa fa-arrow-right fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M216.464 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887L209.393 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L233.434 36.465c-4.686-4.687-12.284-4.687-16.97 0z"></path></svg></span></router-link>
    </div>
    <div class="blog-photo">
      <img :src="imageUrl(props.post.blogCoverPhoto)" :alt="props.post.title">
    </div>
  </div>

</template>

<style lang="scss" scoped>
.blog-wrapper {
  @apply flex flex-col-reverse md:flex-row font-quicksand shadow-md;
}
.blog-content {
  @apply bg-slate-200 py-6 px-3 w-full md:w-2/5 md:flex md:flex-col md:justify-center md:px-[50px] lg:px-[100px] 2xl:px-[200px];

  h2 {
    @apply text-2xl md:text-3xl mb-2;
  }

  p {
    @apply text-base tracking-wide;
  }
}

.blog-photo {
  @apply w-full md:w-3/5;
  
  img {
    @apply w-full;
  }
}

@media (min-width: 640px) {
  .blog-wrapper {

    &:nth-child(odd) {
      .blog-content {
        order: 2;
      }
      .blog-photo {
        order: 1;
      }
    }
  }
}
</style>