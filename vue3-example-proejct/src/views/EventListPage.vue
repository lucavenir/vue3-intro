<template>
  <h1>Events for Good.</h1>
  <div class="events">
    <EventCard v-for="event in events" :event="event" :key="event.id" />
  </div>
</template>

<script lang="ts">
import EventCard from "@/components/EventCard.vue"; // @ is an alias to /src
import EventService from "@/services/EventService";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  components: {
    EventCard,
  },
  data() {
    return {
      events: null,
    };
  },
  async created() {
    try {
      const response = await EventService.getEvents();

      this.events = response.data;
    } catch (e) {
      console.log(e);
    }
  },
});
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
