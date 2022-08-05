<script setup lang="ts">
interface Emitters {
  (event: 'add-count', num: number): void;
  (event: 'reset-count'): void;
}

const emit = defineEmits<Emitters>();
</script>

<template>
    <button @click.prevent="emit('add-count', 2)">Increment me</button>
    <button @click.prevent="emit('reset-count')">Reset me</button>
</template>

