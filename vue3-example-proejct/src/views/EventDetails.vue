<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script lang="ts">
import EventService from "@/services/EventService";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      event: null,
    };
  },
  props: ["id"],
  async created() {
    try {
      const response = await EventService.getEvent(this.id);

      this.event = response.data;
    } catch (e) {
      console.log(e);
    }
  },
});
</script>
