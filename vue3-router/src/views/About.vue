<template>
  <div class="about">
    <p>A site for events to better the world.</p>
    <button @click="goBack">Bo gack</button>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>
