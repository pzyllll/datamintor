<template>
  <div class="header"></div>
  <div class="sub_header">
    <div class="menu_bar">
      <div type="m_realtime" class="menu d-flex j-center a-center" ><router-link to="/home" active-class="active">实时监测</router-link></div>
      <div type="m_runlate" class="menu d-flex j-center a-center"><router-link to="/runlate" active-class="active">运行统计</router-link></div>
      <div type="m_quality" class="menu d-flex j-center a-center"><router-link to="/main" active-class="active">出行规划</router-link></div>

    </div>
  </div>
</template>

<script>


</script>

  
<style>
.header {
  width: 100%;
  height: 70px;
  background: url(@/assets/images/header_bg.png);
}

.sub_header {
  width: 100%;
  height: 100px;
  background: url(@/assets/images/header_subbg.png);
  text-align: center;
}

.menu_bar {
  padding-top: 8px;
  padding-left: 150px;
  width: 552px;
  height: 50px;
  color: #FFF;
  /**
  position: relative;
	top:50%;
	transform:translateY(-50%);
   */
  display: inline-block;
}

.sub_header .menuselect {
  width: 130px;
  height: 40px;
  background-color: #0098da;
  margin-right: 10px;
  
  cursor: pointer;
  position: relative;
  float: left;
}

.sub_header .menu {
  width: 130px;
  height: 40px;
  background-color: #054b82;
  margin-right: 1px;
  cursor: pointer;
  position: relative;
  float: left;
}

.active{
  color: rgb(78, 104, 236);
}

</style>
  