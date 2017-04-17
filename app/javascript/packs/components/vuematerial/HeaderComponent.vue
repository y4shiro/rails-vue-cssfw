<template>
  <div>
    <md-toolbar>
      <h2 class="md-title" style="flex: 1">Title</h2>
      <h2 class="md-title has-ripple">
        <md-ink-ripple />
        tab1
      </h2>
      <a class="md-title has-ripple" href="#">
        <md-ink-ripple />
        tab1
      </a>
      <h2 class="md-title has-ripple">
        <md-ink-ripple />
        tab2
      </h2>
      <h2 class="md-title has-ripple">
        <md-ink-ripple />
        tab3
      </h2>
    </md-toolbar>
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
.has-ripple {
  padding: 20px;
  display: inline-block;
  position: relative;
}
</style>
