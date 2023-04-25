import { useFirestore } from 'vuefire'
import { doc, getDoc, updateDoc } from "firebase/firestore";
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
    changeInitials() {
      this.profile.initials = this.firstname.charAt(0) + this.lastname.charAt(0)
    },
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
    },
    async updateUserSettings(id) {
      const db = useFirestore()
      const docRef = doc(db, 'users', id)
      await updateDoc(docRef, {
        firstName: this.profile.firstname,
        lastName: this.profile.lastname,
        userName: this.profile.username,
      })
      this.changeInitials()
    }
  }
})
