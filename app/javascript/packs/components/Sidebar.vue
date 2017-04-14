<template>
  <div>
    <p>{{ message }}</p>
    <el-button v-for="o in 10">
      {{ 'List item' + o }}
    </el-button>
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
