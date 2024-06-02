<template>
  <div class="top_bar">
      <top_menu></top_menu>
  </div>
  <div class="main_content">
    <router-view></router-view>
  </div>
  <div class="bottom_bar" id="main_bottom_bar">
  </div>
  
</template>

<script>
import top_menu from '@/components/header/header'
export default {
  components: {
    top_menu
  }
}
</script>

<style>
@import "@/assets/css/common.css";

/* 顶部样式 */
.top_bar {
    width: 100%;
    height: 170px;
    position: absolute;
    z-index: 900;
    top:0;
    left: 0;
   
}
.main_content{
    width: 100%;
    height: 100%;
    background: url(@/assets/images/map.jpg);
}
.bottom_bar{
    width: 100%;
    height: 65px;
    position: absolute;
    z-index: 900;
    bottom:0;
    left: 0;
    background: url(@/assets/images/bottom_bg.png);
}

</style>

