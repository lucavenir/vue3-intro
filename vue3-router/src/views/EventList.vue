<template>
  <h1>Events for Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <div class="pagination">
      <router-link
        id="page-prev"
        :to="{ name: 'EventList', query: { page: page - 1 } }"
        rel="prev"
        v-if="page != 1"
      >
        &#60; Previous
      </router-link>
      <router-link
        :to="{ name: 'EventList', query: { page: page + 1 } }"
        rel="next"
        v-if="hasNextPage"
      >
        &#62; Next
      </router-link>
    </div>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'

export default {
  name: 'EventList',
  props: ['page'],
  components: {
    EventCard
  },
  data() {
    return {
      events: null,
      totalEvents: 0
    }
  },
  async beforeRouteEnter(routeTo, _, next) {
    const page = routeTo.query.page || 1

    try {
      const response = await EventService.getEvents(4, page)
      next(vm => {
        vm.events = response.data
        vm.totalEvents = response.headers['x-total-count']
      })
    } catch (e) {
      console.log(e)
      next({ name: 'NetworkError' })
    }
  },
  async beforeRouteUpdate(routeTo) {
    const page = routeTo.query.page || 1

    try {
      const response = await EventService.getEvents(2, page)
      this.events = response.data
      this.totalEvents = response.headers['x-total-count']
    } catch (e) {
      console.log(e)
      return { name: 'NetworkError' }
    }
  },
  computed: {
    hasNextPage() {
      var totalPages = Math.ceil(this.totalEvents / 2)
      return this.page < totalPages
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

.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>
