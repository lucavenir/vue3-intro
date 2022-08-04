<template>
  <p>Register to your event</p>
  <button @click="register">Register now!</button>
</template>

<script>
export default {
  props: ['event'],
  inject: ['GStore'],
  methods: {
    register() {
      // call some api... etc.

      this.GStore.flashMessage = `You've successfully registered for ${this.event.title}`
      setTimeout(() => (this.GStore.flashMessage = ''), 3000)

      this.$router.push({ name: 'EventDetails' })
    }
  }
}
</script>
