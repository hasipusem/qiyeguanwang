import { defineStore } from 'pinia'

export const useApplicationStore = defineStore('application', {
  state: () => ({ submitted: false }),
  actions: { markSubmitted(){ this.submitted = true } }
})
