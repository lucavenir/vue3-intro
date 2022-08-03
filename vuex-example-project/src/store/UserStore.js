import { defineStore } from 'pinia'

export const useUserStore = defineStore('UserStore', {
  state: () => ({ user: 'some-body-once-told-me the-world-is-gonna-roll-me' }),
  getters: {
    firstName: state => state.user.split(' ')[0],
    lastName: state => state.user.split(' ')[1]
  }
})
