import { useFirestore } from 'vuefire'
import { doc, getDoc } from "firebase/firestore";
import { defineStore } from 'pinia'

export const useProfileStore = defineStore('profile', {
  state: () => ({
    profile: {
      email: '',
      firstname: '',
      lastname: '',
      username: '',
      profileId: '',
      initials: ''
    },
    logedIn: false
  }),
  actions: {
    async getCurrentUser(id) {
      const db = useFirestore()
      const docRef = doc(db, 'users', id)
      const firebaseProfile = await getDoc(docRef)
      this.profile.email = firebaseProfile.data().email
      this.profile.firstname = firebaseProfile.data().firstName
      this.profile.lastname = firebaseProfile.data().lastName
      this.profile.username = firebaseProfile.data().userName
      this.profile.profileId = id,
      this.profile.initials = firebaseProfile.data().firstName.charAt(0) + firebaseProfile.data().lastName.charAt(0)
      this.logedIn = true
    }
  }
})
