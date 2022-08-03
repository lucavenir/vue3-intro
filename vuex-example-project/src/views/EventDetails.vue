<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script>
export default {
  props: ['id'],
  async created() {
    try {
      console.log("yOOOOOOOOOOOOOOOOOOOOOOOOOO")
      await this.$store.dispatch('fetchEvent', this.id)
    } catch (e) {
      this.$router.push({
          name: 'Error',
          params: { error: e }
        })
    }
  },
  computed: {
    event() {
      return this.$store.state.event
    }
  }
}
</script>
