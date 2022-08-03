<template>
  <div v-if="eventStore.event">
    <h1>{{ eventStore.event.title }}</h1>
    <p>
      {{ eventStore.event.time }} on {{ eventStore.event.date }} @
      {{ eventStore.event.location }}
    </p>
    <p>{{ eventStore.event.description }}</p>
  </div>
</template>

<script>
import { useEventStore } from '@/store/EventStore'

export default {
  setup() {
    const eventStore = useEventStore()
    return { eventStore }
  },
  props: ['id'],
  async created() {
    try {
      await this.eventStore.fetchEvent(this.id)
    } catch (e) {
      this.$router.push({
        name: 'Error',
        params: { error: e }
      })
    }
  }
}
</script>
