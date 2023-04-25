import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Firebase
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from '@/firebase/firebaseInit.js'

import App from './App.vue'
import router from './router'

import VueEditor from 'vue2-editor'

import './assets/main.css'

const app = createApp(App)

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Fireblog`
  next();
})

app.use(VueFire, {
  // imported above but could also just be created here
  firebaseApp,
  modules: [VueFireAuth()],
})


app.use(createPinia())
app.use(router)
app.use(VueEditor)

app.mount('#app')
