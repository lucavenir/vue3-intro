import { defineStore } from 'pinia'
import EventService from '../services/EventService'

export const useEventStore = defineStore('EventStore', {
  state: () => ({
    events: [],
    event: {}
  }),
  getters: {
    numberOfEvents: state => state.events.length
  },
  actions: {
    async createEvent(event) {
      await EventService.postEvent(event)
      this.event = event
    },
    async fetchEvents() {
      const response = await EventService.getEvents()
      this.events = response.data
    },
    async fetchEvent(id) {
      const existingEvent = this.events.find(event => event.id === id)
      if (existingEvent) this.event = existingEvent

      const response = await EventService.getEvent(id)
      this.event = response.data
    }
  }
})
