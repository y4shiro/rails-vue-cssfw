<template>
  <div>
    <el-menu theme="dark" mode="horizontal">
      <el-menu-item index="1">Element-UI</el-menu-item>
      <el-menu-item index="2">Tab1</el-menu-item>
      <el-menu-item index="3">Tab2</el-menu-item>
      <el-menu-item index="4">Tab3</el-menu-item>
      <el-menu-item index="5">menu</el-menu-item>
    </el-menu>
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
