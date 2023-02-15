<template>
  <div class="container">
    <AppMenus/>

    <div class="main">
      <div style="text-align: start">
        <el-icon v-if="isMenuCollapse" @click="$store.state.isMenuCollapse=false" :size="40"><Expand /></el-icon>
        <el-icon v-if="!isMenuCollapse" @click="$store.state.isMenuCollapse=true" :size="40"><Fold /></el-icon>
      </div>
      <router-view/>
    </div>
  </div>
</template>

<script>
import AppMenus from '@/views/admin/components/AppMenus.vue'
import {mapState} from "vuex";

export default {
  name: "Index",
  components: {
    AppMenus
  },
  computed:{
    ...mapState(['isMenuCollapse']),
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
