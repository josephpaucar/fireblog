import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useBlogsStore = defineStore('blogs', () => {
  const blogs = ref([
    { blogTitle: "Blog Card #1", blogCoverPhoto: "stock-1", blogDate: "May 1, 2021" },
    { blogTitle: "Blog Card #2", blogCoverPhoto: "stock-2", blogDate: "May 1, 2021" },
    { blogTitle: "Blog Card #3", blogCoverPhoto: "stock-3", blogDate: "May 1, 2021" },
    { blogTitle: "Blog Card #4", blogCoverPhoto: "stock-4", blogDate: "May 1, 2021" },
  ])
  const editPost = ref(null)
  // const doubleCount = computed(() => count.value * 2)
  
  // function increment() {
  //   count.value++
  // }

  function showEditControls(checked) {
    editPost.value = checked
    console.log(editPost)
  }

  return { blogs, editPost, showEditControls }
})
