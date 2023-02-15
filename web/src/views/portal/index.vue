<template>
  <div class="page">
    <div class="header">

    </div>
    <div class="content">

    </div>
    <div class="footer">

    </div>
  </div>
</template>

<script>
export default {
  name: "Index"
}
</script>

<style scoped lang="less">
.page {
  height: 100%;
  align-items: center;
  justify-content: center;
  justify-items: center;

  &>div:nth-child(1){
    flex: 1;
    background-color: red;
  }
}
</style>
