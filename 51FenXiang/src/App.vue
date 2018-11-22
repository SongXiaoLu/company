<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.page{
  padding: 0.3rem;
  box-sizing: border-box;
  font-size:0.12rem;
  color: #3C332B;
  font-family: PingFangSC-Regular;
}
</style>
