import { defineStore } from 'pinia'

export const useEventStore = defineStore('EventStore', {
  state: () => ({
    events: [],
    event: {}
  }),
  getters: {
    numberOfEvents: state => state.events.length
  }
})
