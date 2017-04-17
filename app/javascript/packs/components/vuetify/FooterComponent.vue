<template>
  <v-footer class="footer">
    <span class="text-xs-left">copyright</span>
    <span class="text-xs-right">links</span>
    <span>{{ message }}</span>
  </v-footer>
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
.footer {
  background-color: #324057;
  color: #a4aebd;
}
</style>
