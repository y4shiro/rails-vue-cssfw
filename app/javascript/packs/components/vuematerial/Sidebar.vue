<template>
  <div>
    <p>{{ message }}</p>
    <md-button v-for="o in 10" class="md-raised">
      {{ 'List item' + o }}
    </md-button>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data: function () {
    return {
      message: "Sidebar.vue"
    }
  }
}
</script>

<style scoped>
</style>
