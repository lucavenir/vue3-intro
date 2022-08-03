<template>
  <h1>{{ eventStore.numberOfEvents }} Events for Good</h1>
  <div class="events">
    <EventCard
      v-for="event in eventStore.events"
      :key="event.id"
      :event="event"
    />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import { useEventStore } from '@/store/EventStore'

export default {
  setup() {
    const eventStore = useEventStore()
    return { eventStore }
  },
  name: 'EventList',
  components: {
    EventCard
  },
  async created() {
    try {
      await this.eventStore.fetchEvents()
    } catch (e) {
      this.$router.push({
        name: 'Error',
        params: { error: e }
      })
    }
  }
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
