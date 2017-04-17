<template>
  <div>
    <p>{{ message }}</p>
    <v-btn primary dark v-for="o in 10">
      {{ 'List item' + o }}
    </v-btn>
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
