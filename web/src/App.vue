<template>
  <router-view class="content"/>
</template>

<script>
export default {
  name: 'App',
  components: {}
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

html, body, #app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333333;
}
</style>

<style scoped lang="less">
.content {
  width: 100%;
  height: 100%;
}
</style>
