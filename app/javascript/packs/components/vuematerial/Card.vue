<template>
  <md-card class="box-card">
    <md-card-header>
      <div class="md-title">card title</div>
      <div class="md-subhead">card subtitle</div>
    </md-card-header>
    <md-card-content class="card-content">
      card contents
    </md-card-content>
    <md-card-actions>
      <md-button>
        delete
      </md-button>
    </md-card-actions>
  </md-card>
</template>

<script>
export default {
  name: 'Card',
}
</script>

<style scoped>
.box-card {
  width: 480px;
}

.card-content {
  min-height: 240px;
  background-color: #EFF2F7;
}

.box-card-footer {
}

</style>
