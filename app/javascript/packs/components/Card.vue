<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>card title</span>
    </div>
    <div class="box-card-contents">
      card contents
    </div>
    <div class="box-card-footer">
      <span>card footer</span>
      <el-button style="float: right;">
        delete
      </el-button>
    </div>
  </el-card>
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
