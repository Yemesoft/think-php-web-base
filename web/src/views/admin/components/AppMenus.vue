<template>
  <div style="display: flex;flex-direction: column">
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :label="false">expand</el-radio-button>
      <el-radio-button :label="true">collapse</el-radio-button>
    </el-radio-group>
    <div style="overflow: auto;flex: 1">
      <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          :collapse="isCollapse"
          @open="handleOpen"
          @close="handleClose"
      >
        <template v-for="(item,index) in menuItems" :key="index">
          <router-link v-if="!item.hidden" :to="item.path">
            <el-menu-item index="1" class="menu-item">
              <el-icon>
                <Menu/>
              </el-icon>
              <template #title><span>{{ item.name }}</span></template>
            </el-menu-item>
          </router-link>
        </template>

        <el-menu-item index="1" class="menu-item">
          <el-icon>
            <Menu/>
          </el-icon>
          <template #title><span>Test</span></template>
        </el-menu-item>

        <el-menu-item index="1" class="menu-item">
          <el-icon>
            <Menu/>
          </el-icon>
          <template #title><span>Test</span></template>
        </el-menu-item>

        <el-menu-item index="1" class="menu-item">
          <el-icon>
            <Menu/>
          </el-icon>
          <template #title><span>Test</span></template>
        </el-menu-item>

        <el-menu-item index="1" class="menu-item">
          <el-icon>
            <Menu/>
          </el-icon>
          <template #title><span>Test</span></template>
        </el-menu-item>

        <el-menu-item index="1" class="menu-item">
          <el-icon>
            <Menu/>
          </el-icon>
          <template #title><span>Test</span></template>
        </el-menu-item>

        <el-menu-item index="1" class="menu-item">
          <el-icon>
            <Menu/>
          </el-icon>
          <template #title><span>Test</span></template>
        </el-menu-item>

        <el-menu-item index="1" class="menu-item">
          <el-icon>
            <Menu/>
          </el-icon>
          <template #title><span>Test</span></template>
        </el-menu-item>

        <el-menu-item index="1" class="menu-item">
          <el-icon>
            <Menu/>
          </el-icon>
          <template #title><span>Test</span></template>
        </el-menu-item>

        <el-menu-item index="1" class="menu-item">
          <el-icon>
            <Menu/>
          </el-icon>
          <template #title><span>Test</span></template>
        </el-menu-item>

        <el-menu-item index="1" class="menu-item">
          <el-icon>
            <Menu/>
          </el-icon>
          <template #title><span>Test</span></template>
        </el-menu-item>

        <el-menu-item index="1" class="menu-item">
          <el-icon>
            <Menu/>
          </el-icon>
          <template #title><span>Test</span></template>
        </el-menu-item>

        <el-menu-item index="1" class="menu-item">
          <el-icon>
            <Menu/>
          </el-icon>
          <template #title><span>Test</span></template>
        </el-menu-item>

        <el-menu-item index="1" class="menu-item">
          <el-icon>
            <Menu/>
          </el-icon>
          <template #title><span>Test</span></template>
        </el-menu-item>

        <el-menu-item index="1" class="menu-item">
          <el-icon>
            <Menu/>
          </el-icon>
          <template #title><span>Test</span></template>
        </el-menu-item>

        <el-menu-item index="1" class="menu-item">
          <el-icon>
            <Menu/>
          </el-icon>
          <template #title><span>Test</span></template>
        </el-menu-item>

        <el-menu-item index="1" class="menu-item">
          <el-icon>
            <Menu/>
          </el-icon>
          <template #title><span>Test</span></template>
        </el-menu-item>

        <el-menu-item index="1" class="menu-item">
          <el-icon>
            <Menu/>
          </el-icon>
          <template #title><span>Test</span></template>
        </el-menu-item>

        <el-menu-item index="1" class="menu-item">
          <el-icon>
            <Menu/>
          </el-icon>
          <template #title><span>Test</span></template>
        </el-menu-item>

        <el-menu-item index="1" class="menu-item">
          <el-icon>
            <Menu/>
          </el-icon>
          <template #title><span>Test</span></template>
        </el-menu-item>

        <el-menu-item index="1" class="menu-item">
          <el-icon>
            <Menu/>
          </el-icon>
          <template #title><span>Test</span></template>
        </el-menu-item>

        <el-menu-item index="1" class="menu-item">
          <el-icon>
            <Menu/>
          </el-icon>
          <template #title><span>Test</span></template>
        </el-menu-item>

        <el-menu-item index="1" class="menu-item">
          <el-icon>
            <Menu/>
          </el-icon>
          <template #title><span>Test</span></template>
        </el-menu-item>

        <el-menu-item index="1" class="menu-item">
          <el-icon>
            <Menu/>
          </el-icon>
          <template #title><span>Test</span></template>
        </el-menu-item>

        <el-menu-item index="1" class="menu-item">
          <el-icon>
            <Menu/>
          </el-icon>
          <template #title><span>Test</span></template>
        </el-menu-item>

        <el-menu-item index="1" class="menu-item">
          <el-icon>
            <Menu/>
          </el-icon>
          <template #title><span>Test</span></template>
        </el-menu-item>

        <el-menu-item index="1" class="menu-item">
          <el-icon>
            <Menu/>
          </el-icon>
          <template #title><span>Test</span></template>
        </el-menu-item>

        <el-menu-item index="1" class="menu-item">
          <el-icon>
            <Menu/>
          </el-icon>
          <template #title><span>Test</span></template>
        </el-menu-item>

        <el-menu-item index="1" class="menu-item">
          <el-icon>
            <Menu/>
          </el-icon>
          <template #title><span>Test</span></template>
        </el-menu-item>

        <el-menu-item index="1" class="menu-item">
          <el-icon>
            <Menu/>
          </el-icon>
          <template #title><span>Test</span></template>
        </el-menu-item>

        <el-menu-item index="1" class="menu-item">
          <el-icon>
            <Menu/>
          </el-icon>
          <template #title><span>Test</span></template>
        </el-menu-item>

        <el-menu-item index="1" class="menu-item">
          <el-icon>
            <Menu/>
          </el-icon>
          <template #title><span>Test</span></template>
        </el-menu-item>

        <el-menu-item index="1" class="menu-item">
          <el-icon>
            <Menu/>
          </el-icon>
          <template #title><span>Test</span></template>
        </el-menu-item>

        <el-menu-item index="1" class="menu-item">
          <el-icon>
            <Menu/>
          </el-icon>
          <template #title><span>Test</span></template>
        </el-menu-item>

        <el-menu-item index="1" class="menu-item">
          <el-icon>
            <Menu/>
          </el-icon>
          <template #title><span>Test</span></template>
        </el-menu-item>

        <el-menu-item index="1" class="menu-item">
          <el-icon>
            <Menu/>
          </el-icon>
          <template #title><span>Test</span></template>
        </el-menu-item>

        <el-menu-item index="1" class="menu-item">
          <el-icon>
            <Menu/>
          </el-icon>
          <template #title><span>Test</span></template>
        </el-menu-item>

        <el-menu-item index="1" class="menu-item">
          <el-icon>
            <Menu/>
          </el-icon>
          <template #title><span>Test</span></template>
        </el-menu-item>

        <el-menu-item index="1" class="menu-item">
          <el-icon>
            <Menu/>
          </el-icon>
          <template #title><span>Test</span></template>
        </el-menu-item>

        <el-menu-item index="1" class="menu-item">
          <el-icon>
            <Menu/>
          </el-icon>
          <template #title><span>Test</span></template>
        </el-menu-item>

        <el-menu-item index="1" class="menu-item">
          <el-icon>
            <Menu/>
          </el-icon>
          <template #title><span>Test</span></template>
        </el-menu-item>

        <el-menu-item index="1" class="menu-item">
          <el-icon>
            <Menu/>
          </el-icon>
          <template #title><span>Test</span></template>
        </el-menu-item>

        <el-menu-item index="1" class="menu-item">
          <el-icon>
            <Menu/>
          </el-icon>
          <template #title><span>Test</span></template>
        </el-menu-item>

        <el-menu-item index="1" class="menu-item">
          <el-icon>
            <Menu/>
          </el-icon>
          <template #title><span>Test</span></template>
        </el-menu-item>
      </el-menu>
    </div>
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
.menu-item{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: red;
  text-align: start;

  .menu-item-icon{
    margin-right: 13px;
  }
}
</style>
