<template>
  <div>
    <header-component></header-component>
    <Contents></Contents>
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue'
import FooterComponent from './FooterComponent.vue'
import Contents from './Contents.vue'

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
    Contents
  }
}
</script>

<style scoped>
</style>
