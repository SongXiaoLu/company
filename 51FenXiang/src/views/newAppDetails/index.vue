<template>
  <scroll :data="arr">
    <div class="page">
      <div class="content-box">
        <div class="top">
          <img :src="apps.apppicurl" alt="">
          <p class="des">
            <span class="title">{{apps.appname}}</span>
            <span class="size">{{apps.appsize}}MB</span>
            <span class="type">{{apps.apptype}}</span>
          </p>
        </div>
        <div class="tab-box">
          <mt-swipe :auto="2000" class="slideshowBox" v-if="apppic">
            <mt-swipe-item class="swipeItem" v-for="item in apppic" :key="item.id">
              <img class="itemImg" :src="item.detailpicurl" />
              <!--<span class="desc">{{item.title}}</span>-->
            </mt-swipe-item>
          </mt-swipe>
          <!--图片不存在，默认的轮播图-->
          <mt-swipe :auto="2000" class="defaultPicBox" v-if="deaultpic">
            <mt-swipe-item class="swipeItem" v-for="item in deaultpic" :key="item.id">
              <img class="itemImg" :src="item.detailpicurl" />
            </mt-swipe-item>
          </mt-swipe>
        </div>
        <!--下载金币-->
     <div class="moneyBox" v-if="query.isShow == 0 ">
       <div class="transmit">
         <span>分享后单次有效下载即可获得</span>
         <span>
        <img class="gold" src="../../assets/images/金币.png" alt="">
        <i class="goldNum">+{{apps.money*2}} 金币</i>
      </span>
       </div>
       <!--转发金币-->
       <div class="transmit">
         <span>分享后单次有效点击即可获得</span>
         <span>
        <img class="gold" src="../../assets/images/金币.png" alt="">
        <i class="goldNum">+{{apps.money}} 金币</i>
      </span>
       </div>
     </div>
      </div>
    </div>
  </scroll>
</template>

<script>
  import Viewer from 'viewerjs';
  import 'viewerjs/dist/viewer.css';
  import {mapGetters,mapMutations} from 'vuex'
  import scroll from '@/base/scroll'
  import bgLine from '@/base/bgLine'
  //  import downApp from '@/base/downApp'
  export default {
    name: 'AppDetails',
    components: {
      scroll,
      bgLine,
//    downApp
    },
    inject:['reload'], // 注入方法
    computed: {
//    ...mapGetters([
//      'appid'
//    ])
      // 默认的轮播图
      deaultpic() {
        if ( this.apppic.length == 0 || this.apppic == '' ) {
        return [{id:0,detailpicurl: require('../../assets/images/imgccc.png')},{id:1,detailpicurl: require('../../assets/images/imgccc.png')}]
        }
      }
    },
    data () {
      return {
        details: {},
        arr: [],
        apps: {},
        apppic: '', // 轮播图
        query:null,
      }
    },
    methods: {
      UnfoldFn() {
        this.isUnfold = !this.isUnfold
      },
      getAppDetails () {
//      console.log(1)
        this.$req.get('appxiangxi', {appId:this.query.id}).then(res => {
          console.log(res)
          this.details = res.data.data
//          console.log(this.details);
          this.arr.push(this.details.app)
//          console.log(this.arr)
          this.apps = res.data.data.app
          this.setAppDownUrl(res.data.data.app['downloadurl'])
         console.log('downurl',res.data.data.app['downloadurl'])
          let shengyuApp = Number(this.apps.appshengyu)
          let maxnumApp = Number(this.apps.sharingmaxnum)
//        console.log(shengyuApp, maxnumApp)
          let currentApp = maxnumApp-shengyuApp
          this.progressVal = (currentApp / maxnumApp*100).toFixed(2) // 百分比
          this.apppic = res.data.data.appPics
          console.log('apppic',this.apppic);
        }).catch(err => {
          console.log(err)
        })
      },
      ...mapMutations([
        'setAppDownUrl',
        'setIsShowDownApp',
        'setAppId',
        'setAlipayId',
        'setFromPage'
        ]
      )
    },
    watch:{
    },
    created () {
      this.query = this.$route.query
      console.log(this.query.isShow);
      this.setIsShowDownApp(this.query.isShow) // 是否显示下载按钮
      this.setAppId(this.query.id)
      this.setAlipayId(this.query.alipayId)
      this.setFromPage('appDetails')
//    console.log('父组件created')
      this.getAppDetails()
    },
    mounted () {
//    console.log('父组件mounted')
    }
  }
</script>

<style type="text/scss" lang="scss" scoped>
  .slideshowBox{
    height:600px;
    text-align: center;
    .swipeItem{
      height: 100%;
      .itemImg{
        height: 100%;
      }
    }
  }
  .defaultPicBox{
    height: 600px;
    text-align: center;
    .swipeItem{
      height: 100%;
      .itemImg{
        height: 100%;
      }
    }
  }
  .moneyBox{
    margin-top: 0.5rem;
  }
  .transmit{
    display: flex;
    padding: 0 0.2rem;
    line-height: 0.5rem;
    align-items: center;
    justify-content: space-between;
    font-size:0.28rem;
    font-family:PingFangSC-Regular;
    color:rgba(160,152,142,1);
    background-color: rgb(240,242,245);
    .gold{
      width: 0.48rem;
      height: 0.48rem;
      margin-right: 0.2rem;
    }
    .goldNum{
      display: inline-block;
      font-size:0.3rem;
      font-family:PingFangSC-Medium;
      color:rgba(255,151,0,1);
      position: relative;
      top: -0.1rem;
    }
  }
  .content-box {}
  .content-box .top {
    height: 1.6rem;
    /*background-color: #cccccc;*/
    img {
      width: 1.6rem;
      height: 1.6rem;
      float: left;
    }
    .des {
      margin-left: 0.28rem;
      float: left;
      .title {
        font-size: 0.4rem;
        display: block;
        color: #3C332B;
      }
      .size{
        display: block;
        font-size:0.26rem;
        color: #565149;
        margin-bottom:0.2rem;
      }
      .type {
        padding: 0.08rem;
        font-size: 0.26rem;
       /* background-color: #FFA400;
        opacity: 0.1;
        color: #FF9700;*/
        background-color: rgb(239,249,255);
        color: #63CAFF;
        /*border: 1px solid #C4DEF9;*/
        border: 1px solid #63CAFF;
      }
    }
  }
  .tab-box{
    margin-top: 0.6rem;
    margin-bottom: 0.6rem;
  }


</style>

