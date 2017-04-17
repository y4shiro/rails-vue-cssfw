<template>
  <div>
    <p>{{ message }}</p>
    <card></card>
    <card></card>
    <card></card>
  </div>
</template>

<script>
import Card from './Card.vue'

export default {
  name: 'Contents',
  data: function () {
    return {
      message: "Contents.vue"
    }
  },
  components: {
    Card
  }
}
</script>

<style scoped>
</style>
