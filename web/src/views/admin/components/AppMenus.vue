<template>
  <div style="display: flex;flex-direction: column">
    <div style="overflow: auto;flex: 1">
      <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          :collapse="isMenuCollapse"
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

        <el-submenu>
          <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1"><el-icon><location /></el-icon>item one</el-menu-item>
            <el-menu-item index="1-2"><el-icon><location /></el-icon>item two</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
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
import {mapGetters, mapState} from "vuex";

export default {
  name: "AppMenus",
  data() {
    return {
    }
  },
  computed: {
    // ...mapState(['isMenuCollapse']),
    isMenuCollapse(){
      return this.$store.state.isMenuCollapse
    },
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
