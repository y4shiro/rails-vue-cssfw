<template>
  <div>
    <header-component></header-component>
    <Contents></Contents>
    <Sidebar></Sidebar>
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
</style>
