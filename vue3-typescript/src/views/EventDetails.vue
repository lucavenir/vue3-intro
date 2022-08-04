<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script lang="ts">
import EventService from "@/services/EventService";
import { EventItem } from "@/types";
import { defineComponent } from "vue";
export default defineComponent({
  props: ["id"],
  data() {
    return {
      event: {} as EventItem
    };
  },
  created() {
    EventService.getEvent(this.id)
      .then(response => {
        this.event = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
});
</script>
