<template>
  <div>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :label="false">expand</el-radio-button>
      <el-radio-button :label="true">collapse</el-radio-button>
    </el-radio-group>
    <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
    >
      <template v-for="(item,index) in menuItems" :key="index">
        <router-link :to="item.path">
          <el-menu-item v-if="!item.hidden" index="1">
            <el-icon>
              <Menu/>
            </el-icon>
            <template #title>{{ item.name }}</template>
          </el-menu-item>
        </router-link>
      </template>
    </el-menu>
  </div>
</template>

<script>

import admin from '@/router/admin'

export default {
  name: "AppMenus",
  data() {
    return {
      isCollapse: false
    }
  },
  computed: {
    menuItems() {
      return admin.children
    }
  },
  created() {

  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
