import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../pages/login/login')
  },
  { // 首页
    path: '/home',
    name: 'Home',
    component: () => import('../pages/home/home')
  },
  { // 厂区一览
    path: '/runlate',
    name: 'RunLate',
    component: () => import('../pages/runlate/runlate')
  },
  { // three
    path: '/three',
    name: 'three',
    component: ()=> import('../pages/three/three'),
   
  },
  
{
  //main
  path:'/main',
  name:'main',
  component:() =>import('../pages/main/index.vue'),
 // redurect:'/main/list',//二级路由 
  children:[
    {
      path:'list',
      name:'list',
      component:() =>import('../pages/main/list/index.vue'),
    },
    {
      path:'add',
      name:'add',
      component:() =>import('../pages/main/add/index.vue'),
    }
  ]
}


];

/**
 * createWebHashHistory： hash版本的路由，就是路径里面含有#
 * createWebHistory: history的路由，路径里面不含有#
 */
const router = createRouter({
  history: createWebHashHistory(),  // hash路由模式
  // history: createWebHistory(),  // history路由模式
  routes
});

export default router;
