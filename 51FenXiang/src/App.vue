<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view v-if="isRouterAlive"/>
    <downApp></downApp>
  </div>
</template>

<script>
  import downApp from '@/base/downApp'
  export default {
    name: 'App',
    components: {
    downApp
    },
    provide (){
      return {
        reload:this.reload
      }
    },
    data(){
      return{
        isRouterAlive: true
      }
    },
    methods:{
//      声明reload方法，控制router-view的显示或隐藏，从而控制页面的再次加载
      reload (){
        this.isRouterAlive =false
        this.$nextTick(function () {
          this.isRouterAlive = true

        })
      }
    }
  }
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.page-box{
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
