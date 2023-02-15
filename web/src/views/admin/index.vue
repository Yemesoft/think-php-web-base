<template>
  <div class="container">
    <AppMenus/>

    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<script>
import AppMenus from '@/views/admin/components/AppMenus.vue'

export default {
  name: "Index",
  components: {
    AppMenus
  }
}
</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;

  .main {
    flex: 1;
  }
}
</style>
