<template>
  <div>
    <header-component></header-component>
    <md-layout md-gutter>
      <md-layout md-flex="70">
        <Contents></Contents>
      </md-layout>
      <md-layout>
        <Sidebar></Sidebar>
      </md-layout>
    </md-layout>
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
