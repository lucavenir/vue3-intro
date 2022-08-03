import { createStore } from 'vuex'

export default createStore({
  state: {
    user: "example name",
    events: []
  },
  mutations: {
    addEvent(state, event) {
      state.events.push(event)
    }
  },
  actions: {},
  modules: {}
})