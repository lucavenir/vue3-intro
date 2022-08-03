import { createStore } from 'vuex'
import EventService from '../services/EventService'

export default createStore({
  state: {
    user: 'example-name',
    events: [],
    event: {}
  },
  getters: {
    numberOfEvents(state) {
      return state.events.length
    }
  },
  mutations: {
    addEvent(state, event) {
      state.events.push(event)
    },
    setEvents(state, events) {
      state.events = events
    },
    setEvent(state, event) {
      state.event = event
    }
  },
  actions: {
    async createEvent({ commit }, event) {
      await EventService.postEvent(event)
      commit('addEvent', event)
    },
    async fetchEvents({ commit }) {
      const response = await EventService.getEvents()

      commit('setEvents', response.data)
    },
    async fetchEvent({ commit, state }, id) {
      const existingEvent = state.events.find(event => event.id === id)
      if (existingEvent) return commit('setEvent', existingEvent)

      const response = await EventService.getEvent(id)
      commit('setEvent', response.data)
    }
  },
  modules: {}
})
