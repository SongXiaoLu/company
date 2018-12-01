<template>
  <header>
    <img @click="backFn" class="back" src="../../../assets/images/common/back.png" alt="">
    <slot></slot>
  </header>
</template>

<script>
  export default {
    name: "Header",
    props:{
      'title':{
        type:String
      },
      'isShowBack':{
        type:Boolean,
        default: true
      }
    },
    component: {
// someComponent
    },
    computed: {},
    data() {
      return {
        msg: "Hello Vue.js"
      }
    },
    methods: {
      backFn(){
        this.$emit('backFn')
      }
    },
    created() {
    }

  }
</script>

<style type="text/scss" lang="scss" scoped>
  header {
    width: 100%;
    height: 0.88rem;
    line-height: 0.88rem;
    text-align: center;
    font-size:0.36rem;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(60,51,43,1);
    .back{
      width: 0.6rem;
      height: 0.6rem;
      position: absolute;
      left: 0.3rem;
      top: 0.1rem;
    }
  }
</style>
