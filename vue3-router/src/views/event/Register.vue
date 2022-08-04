<template>
  <p>Register to your event</p>
  <button @click="register">Register now!</button>
</template>

<script>
export default {
  props: ['event'],
  methods: {
    register() {
      // call some api... etc.

      this.$router.push({ name: 'EventDetails' })
    }
  }
}
</script>
