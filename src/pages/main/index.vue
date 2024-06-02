<template>
  <el-container>
    <el-aside width="200px" height="500px">
      <!-- el-menu 根
      el-menu-item 菜单项 不可以展开
      el-submenu 子菜单 可以展开的 -->
      <el-menu
        :active-text-color="activeTextColor" 
        :router="true" 
        :background-color="backgroundColor"
        class="el-menu-vertical-demo"
        :default-active="defaultActive"
        :text-color="textColor">
        <!-- 菜单项 -->
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span></span>
        </el-menu-item>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span></span>
        </el-menu-item><el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span></span>
        </el-menu-item><el-menu-item>
          <el-icon><icon-menu /></el-icon>
          <span>目录</span>
        </el-menu-item>
        <el-submenu>
          <el-menu-item index="/main/list">
            <el-icon><icon-menu /></el-icon>
            <span>地图距离</span>
          </el-menu-item>
        </el-submenu>
        <el-submenu>
          <el-menu-item index="/main/add">
            <el-icon><icon-menu /></el-icon>
            <span>搜索</span>
          </el-menu-item>
        </el-submenu>
        <el-submenu>
          <el-menu-item >
            <el-icon><icon-menu /></el-icon>
            <span></span>
          </el-menu-item>
        </el-submenu>  <el-submenu>
          <el-menu-item >
            <el-icon><icon-menu /></el-icon>
            <span></span>
          </el-menu-item>
        </el-submenu>  <el-submenu>
          <el-menu-item >
            <el-icon><icon-menu /></el-icon>
            <span></span>
          </el-menu-item>
        </el-submenu>  <el-submenu>
          <el-menu-item >
            <el-icon><icon-menu /></el-icon>
            <span></span>
          </el-menu-item>
        </el-submenu>  <el-submenu>
          <el-menu-item >
            <el-icon><icon-menu /></el-icon>
            <span></span>
          </el-menu-item>
        </el-submenu>
        <el-submenu>
          <el-menu-item >
            <el-icon><icon-menu /></el-icon>
            <span></span>
          </el-menu-item>
        </el-submenu><el-submenu>
          <el-menu-item >
            <el-icon><icon-menu /></el-icon>
            <span></span>
          </el-menu-item>
        </el-submenu>
        <el-submenu>
          <el-menu-item >
            <el-icon><icon-menu /></el-icon>
            <span></span>
          </el-menu-item>
        </el-submenu><el-submenu>
          <el-menu-item >
            <el-icon><icon-menu /></el-icon>
            <span></span>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-main> 
      <router-view />
    </el-main>
  </el-container>
</template>

<script setup>
import { onMounted } from 'vue';
import axios from 'axios';

// 定义颜色
const activeTextColor = '#ffd04b';
const backgroundColor = '#545c64';
const textColor = '#fff';

// 定义默认活动路径
const defaultActive = '/main/list';
</script>

<style scoped>
.el-container {
  height: 100%;
}

.el-aside {
  background-color: #E9EEF3;
  color: #333;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
}
</style>