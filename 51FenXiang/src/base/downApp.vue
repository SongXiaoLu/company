<template>
  <div class="footer" v-if="isShowDownApp">
      <img class="logo" src="../assets/images/51.png" alt="">
    <p class="des">
      <i>51纷享</i><br>
      <span>分享创造价值</span>
    </p>
    <div class="right" @click="downFn">下载APP</div>
  </div>
</template>

<script>
  import {mapGetters,mapMutations} from 'vuex'

  export default {
    name: "down",
    components: {
// someComponent
    },
    computed: {
      ...mapGetters([
        'appDownUrl',
        'isShowDownApp'
      ])
    },
    data() {
      return {
        msg: "Hello Vue.js"
      }
    },
    methods: {
      downFn() {
        this.$router.push(this.appDownUrl)
//        console.log(this.appDownUrl);
      }
    },
    created() {
    }

  }
</script>

<style type="text/scss" lang="scss" scoped>
  /*@import "~@/style/mixin.scss"*/
  .footer{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1.36rem;
    box-sizing: border-box;
    /*background-color: red;*/
    border-top: 1px solid #D8D8D8;
    display: flex;
    flex-direction: row;
    padding:0.2rem;
    align-items: center;
    font-size:0.32rem;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(60,51,43,1);
    background-color: #fff;
    line-height:0.44rem;
  }
.logo{
    width: 0.96rem;
    height: 0.96rem;
  }
  .des{
    margin-left: 0.2rem;
    span{
      font-size:0.26rem;
      font-family:PingFangSC-Regular;
      font-weight: normal;
    }
  }
  .right{
  position: absolute;
    right: 0.3rem;
    width: 1.9rem;
    height: 0.68rem;
    line-height:0.68rem;
    border-radius:0.04rem;
    border:2px solid  #FFA400;
    color:rgba(255,164,0,1);
    text-align: center;
  }
</style>
