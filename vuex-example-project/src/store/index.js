import { createStore } from 'vuex'
import EventService from '../services/EventService'

export default createStore({
  state: {
    user: 'example-name',
    events: [],
    event: {}
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
      try {
        await EventService.postEvent(event)
        commit('addEvent', event)
      } catch (e) {
        console.log(e)
      }
    },
    async fetchEvents({ commit }) {
      try {
        const response = await EventService.getEvents()
        commit('setEvents', response.data)
      } catch (e) {
        console.log(e)
      }
    },
    async fetchEvent({ commit, state }, id) {
      const existingEvent = state.events.find(event => event.id === id)
      if (existingEvent) {
        commit('setEvent', existingEvent)
        return;
      }
      
      try {
        const response = await EventService.getEvent(id)
        commit('setEvent', response.data)
      } catch (e) {
        console.log(e)
      }
    }
  },
  modules: {}
})
