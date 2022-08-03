<template>
  <h4>Woops, Something went wrong</h4>
  <h5>Like, really, really wrong</h5>
  <br><br>
  <p>{{ error }}</p>
</template>

<script>
export default {
    props: ['error']
  }
</script>