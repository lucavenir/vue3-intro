<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { onMounted, ref } from "vue";
import fetchCount from "../fetchCount";

interface Props {
  limit: number;
  alertMessageLimit?: string;
};

const props = withDefaults(defineProps<Props>(), {
  alertMessageLimit: "I'd say this is a bad idea"
});
const count = ref<number | null>(null);

onMounted(() => {
  fetchCount((c) => {
    count.value = c
  })
});

function addCount(num: number) {
  if (count.value === null) return;
  if (count.value >= props.limit) {
    alert(props.alertMessageLimit);
    return;
  }
  
  count.value += num;
}
</script>

<template>
  <div>
    <p>{{ count }}</p>
    <button @click.prevent="() => addCount(2)">Increment me</button>
  </div>
</template>
