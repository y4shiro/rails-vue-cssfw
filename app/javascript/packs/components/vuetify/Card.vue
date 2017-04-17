<template>
  <v-card class="box-card">
    <v-card-row class="green darken-1">
      <v-card-title>
        <span class="white--text">card title</span>
      </v-card-title>
    </v-card-row>
    <v-card-text class="box-card-contents">
      card contents
    </v-card-text>
    <v-card-row actions>
      <span>card footer</span>
      <v-btn flat class="green--text darken-1">
        delete
      </v-btn>
    </v-card-row>
  </v-card>
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

.box-card-contents {
  min-height: 240px;
  background-color: #EFF2F7;
}

.box-card-footer {
}

</style>
