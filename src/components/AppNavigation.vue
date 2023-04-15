<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <nav class="container">
      <div class="brand">
        <RouterLink to="{ name: 'home' }">FireBlogs</RouterLink>
      </div>

      <div class="nav-links">
        <ul>
          <li>
            <RouterLink to="{ name: 'home' }">Home</RouterLink>
            <RouterLink to="{ name: 'about' }">Blogs</RouterLink>
            <RouterLink to="{ name: 'about' }">Create Post</RouterLink>
            <RouterLink to="{ name: 'about' }">Login/Register</RouterLink>
          </li>
        </ul>
      </div>
    </nav>
    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="bars" class="svg-inline--fa fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path fill="currentColor" d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"></path>
    </svg>
    <Transition name="mobile-nav">
      <ul>
        <li>
          <RouterLink to="{ name: 'home' }">Home</RouterLink>
          <RouterLink to="{ name: 'about' }">Blogs</RouterLink>
          <RouterLink to="{ name: 'about' }">Create Post</RouterLink>
          <RouterLink to="{ name: 'about' }">Login/Register</RouterLink>
        </li>
      </ul>
    </Transition>
  </header>
</template>

<style scoped>
</style>