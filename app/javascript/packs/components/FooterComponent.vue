<template>
  <div class="footer">
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
.footer {
  height: 120px;
  background-color: #324057;
  color: #a4aebd;
  width: 100%;
}
</style>
