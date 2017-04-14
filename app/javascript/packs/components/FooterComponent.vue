<template>
  <div>
    <div>copyright</div>
    <div>links</div>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'FooterComponent',
  data: function () {
    return {
      message: "FooterComponent.vue"
    }
  }
}
</script>

<style scoped>
</style>
