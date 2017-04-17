<template>
  <div>
    <v-toolbar class="green">
      <v-toolbar-title>Title</v-toolbar-title>
      <v-toolbar-items>
        <v-toolbar-item ripple>Link</v-toolbar-item>
        <v-toolbar-item ripple>Link</v-toolbar-item>
        <v-toolbar-item ripple>Link</v-toolbar-item>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data: function () {
    return {
      message: "HeaderComponent.vue"
    }
  }
}
</script>

<style scoped>
</style>
