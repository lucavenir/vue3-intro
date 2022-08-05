<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { onMounted, reactive, ref } from "vue";
import fetchCount from "./fetchCount";

interface AppInfo {
  name: string;
  slogan: string;
}

const count = ref<number | null>(null);

// const nextCount = computed(() => {
//   if (count.value === null) return null;
// 
//   return count.value += 1
// })

const appInfo: AppInfo = reactive({
  name: 'My App',
  slogan: 'This is awesome.'
});

onMounted(() => {
  fetchCount((c) => {
    count.value = c
  })
});

function addCount(num: number) {
  if(count.value !==null) {
    count.value += num;
  }
}
</script>

<template>
  <div>
    <h1>{{ appInfo.name }}</h1>
    <h2>{{ appInfo.slogan}}</h2>
  </div>
  <p>{{ count }}</p>
  <button @click.prevent="() => addCount(2)"></button>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
