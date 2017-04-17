<template>
  <div>
    <header-component></header-component>
    <v-container fluid="fluid">
      <v-row>
        <v-col xs9>
          <Contents></Contents>
        </v-col>
        <v-col xs3>
          <Sidebar></Sidebar>
        </v-col>
      </v-row>
    </v-container>
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
