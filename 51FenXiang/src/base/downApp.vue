<template>
  <div>
    <!--自己的app，wx分享显示-->
    <div class="footer" v-if="isShowDownApp==1 && fromPage=='articleDetails' ">
       <img class="logo" src="../assets/images/51.png" alt="">
       <p class="des">
         <i>51纷享</i><br>
         <span>分享创造价值</span>
       </p>
       <div class="right" @click="downFn">下载APP</div>
    </div>
    <!--下载app,wx分享显示-->
    <div class="footer" v-if="isShowDownApp == 1 && fromPage=='appDetails' ">
      <div class="btn-left" @click="shareFn">分享</div>
      <div class="btn-right" @click="downFn">下载</div>
    </div>
  </div>

</template>

<script>
  import {mapGetters,mapMutations} from 'vuex'

  export default {
    name: "down",
    components: {
    },
    computed: {
      ...mapGetters([
        'appDownUrl',
        'isShowDownApp',
        'alipayId',
        'fromPage',
        'appid'
      ])
    },
    data() {
      return {
        msg: "Hello Vue.js"
      }
    },
    methods: {
      shareFn(){
        this.$messagebox({
          title: "温馨提示",
          message: "请先下载51纷享App",
          showConfirmButton: false
        });
       setTimeout(function () {
         window.open('https://fir.im/51share')
       },2000)
      },
      downFn() {
//        console.log('created',this.appDownUrl);
//        console.log('isShowDownApp',this.isShowDownApp);
        if(this.fromPage == 'articleDetails'){ // 下载自己app
          window.open('https://fir.im/51share')
        }else if (this.fromPage == 'appDetails'&& this.isShowDownApp== 1){ // 下载对应的app
          window.open(this.appDownUrl)
          this.$req.get('shareDownSuccess', {
            alipayId: this.alipayId,
            sharegoodsId: this.appid
          }).then(res => {
            console.log(res);
          }).catch(err =>
            console.log(err)
          )
        }
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

    .btn-left {
     position: absolute;
      left: 0.2rem;
      width: 2.6rem;
      height: 0.8rem;
      text-align: center;
      line-height: 0.8rem;
      color: #FF9700;
      border: 1px solid #FF9700;
      border-radius:5px;
    }
    .btn-right{
    position: absolute;
      right: 0.2rem;
      width: 2.6rem;
      height: 0.8rem;
      text-align: center;
      line-height: 0.8rem;
      border: 1px solid #FF9700;
      color: white;
      background:linear-gradient(90deg,rgba(254,200,67,1) 0%,rgba(255,159,25,1) 100%);
      border-radius:5px;

    }
</style>
