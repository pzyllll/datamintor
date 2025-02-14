import { createApp } from 'vue'//
import App from './App.vue'//
import router from './router/index.js'//
import echarts from 'echarts'//
import 'element-plus/theme-chalk/index.css'  // 引入 ElementPlus 组件样式
// 图标和组件需要分开引入
import ElementPlus from 'element-plus';   // 引入 ElementPlus 组件
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import Vuex from 'vuex'

const app = createApp(App);

createApp(App).use(ElementPlus).use(router).use(Vuex).mount('#app');

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

