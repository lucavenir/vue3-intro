<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { reactive } from "vue";
import Counter from "./components/Counter.vue";

interface AppInfo {
  name: string;
  slogan: string;
}

const appInfo: AppInfo = reactive({
  name: 'My App',
  slogan: 'This is awesome.'
});
</script>

<template>
  <div>
    <h1>{{ appInfo.name }}</h1>
    <h2>{{ appInfo.slogan}}</h2>
  </div>
  <Counter
    :limit="10"
  />
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
