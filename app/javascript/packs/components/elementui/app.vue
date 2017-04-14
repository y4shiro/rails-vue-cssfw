<template>
  <div>
    <header-component></header-component>
    <el-row class="container">
      <el-col :span="18">
        <Contents></Contents>
      </el-col>
      <el-col :span="6">
        <Sidebar></Sidebar>
      </el-col>
    </el-row>
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue'
import FooterComponent from './FooterComponent.vue'
import Contents from './Contents.vue'
import Sidebar from './Sidebar.vue'

export default {
  name: 'App',
  data: function () {
    return {
      message: "App.vue"
    }
  },
  components: {
    HeaderComponent,
    FooterComponent,
    Contents,
    Sidebar
  }
}
</script>

<style scoped>
.container {
  min-height: 480px;
}
</style>
