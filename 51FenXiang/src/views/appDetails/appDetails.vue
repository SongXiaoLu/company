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
          <ul class="tab-title">
            <li @click="changeTab(0)" :class="{'active': activeTab === 0 }"><span>项目说明</span></li>
            <li @click="changeTab(1)" :class="{'active': activeTab === 1 }"><span>详情</span></li>
          </ul>
          <div class="tab-content" v-if="activeTab === 0">
            <div class="intro-box ">
              <p class="title">项目进度</p>
              <div class="appNum">
                <p class="title">剩余件数(件)</p>
                <p  class="shengyu">{{apps.appshengyu}}</p>
                <mt-progress :value="Number(progressVal)" :bar-height="5">
                  <div slot="start" style="margin-right: 0.1rem">{{apps.sharingmaxnum}}</div>
                  <div slot="end" style="margin-left: 0.1rem">0</div>
                </mt-progress>
              </div>
              <bgLine></bgLine>
              <p class="title">项目说明</p>
              <p class="des">{{apps.appname}}：{{apps.yingyongjianjie}}</p>
              <span class="game-des">
                【游戏介绍】
              </span>
              <p class="gameDes-text" :class="{'active':isUnfold}">{{apps.youxijieshao}}
                <!--<span class="look" @click="UnfoldFn">{{isUnfold?'收起':'查看更多'}}</span>-->
              </p>
            </div>
          </div>
          <div class="tab-content" v-if="activeTab === 1">
            <scroll :data="apppic" :scrollX=true>
              <ul ref="picList" class="picList">
                <li v-for="(item,index) in apppic" :key="index"><img :src="item.detailpicurl" preview alt=""></li>
              </ul>
            </scroll>
            <div class="intro-box">
              <p class="title">应用简介</p>
              <p class="des">{{apps.appname}}：{{apps.yingyongjianjie}}</p>
              <span class="game-des">
                【游戏介绍】
              </span>
              <p>{{apps.youxijieshao}}</p>
            </div>
            <span class="line"></span>
            <!--信息版本-->
            <article>
              <p>信息版本</p>
              <ul>
                <li><span>版本</span>{{apps.banben}}</li>
                <li><span>大小</span>{{apps.appsize}}MB</li>
                <li><span>更新日期</span>{{apps.updateDate}}</li>
                <li><span>类别</span>{{apps.leibie}}</li>
                <li><span>语言</span>{{apps.yuyan}}</li>
                <li><span>开发商</span>{{apps.kaifashang}}</li>
                <li><span>兼容性</span>{{apps.jianrongxing}}</li>
              </ul>
            </article>
          </div>

        </div>
      </div>
    </div>
  </scroll>
</template>

<script>
import {mapGetters} from 'vuex'
import scroll from '@/base/scroll'
import bgLine from '@/base/bgLine'
export default {
  name: 'AppDetails',
  components: {
    scroll,
    bgLine
  },
  computed: {
    ...mapGetters([
      'appid'
    ])
  },
  data () {
    return {
      details: {},
      arr: [],
      apps: {},
      apppic: [], // 轮播图
      progressVal: null,
      infoVersion: [],
      activeTab: 0,
      isReadyX: false,
      isUnfold: false
    }
  },
  methods: {
    UnfoldFn(){
      this.isUnfold = !this.isUnfold
    },
    getAppDetails () {
      this.$req.get('appAPI/appxiangxi', {appId: this.appid}).then(res => {
//        console.log(res)
        this.details = res.data
        console.log(this.details);
        this.arr = this.details.apps
//        console.log(this.arr)
        this.apps = res.data.apps[0]
        let shengyuApp = Number(this.apps.appshengyu)
        let maxnumApp = Number(this.apps.sharingmaxnum)
        let currentApp = maxnumApp-shengyuApp
        this.progressVal = (currentApp / maxnumApp*100).toFixed(2) // 百分比
        this.apppic = res.data.apppic
      }).catch(err => {
        console.log(err)
      })
    },
    changeTab (num) {
      this.activeTab = num
      if(num === 1 && !this.isReadyX){
       this. _initPics()
        this.isReadyX = true
      }
    },
    _initPics () {
      if (this.apppic && this.activeTab ==1) {
        let picWidth = 2.92
        let margin = 0.1
        let width = (picWidth + margin) * this.apppic.length - margin
        this.$nextTick(() =>{
//          console.log(this.$refs.picList);
          this.$refs.picList.style.width = width + 'rem'
//          console.log(width, 'rem');
        })

      }
    }
  },
  created () {
    console.log('父组件created')
    this.getAppDetails()
  },
  mounted () {
    console.log('父组件mounted')
  }
}
</script>

<style type="text/scss" lang="scss" scoped>
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
        background-color: #63CAFF;
        opacity: 0.5;
        color: #1A63CAFF;
        border: 1px solid #1A63CAFF;
      }
    }
  }
  .content-box .tab-box{
    margin-top: 0.6rem;
    .tab-title{
      display: flex;
      font-size:0.32rem;
      /*position: relative;*/
      border-bottom: 0.5px solid #dddddd;
      li{
        flex: 1;
        line-height: 0.5rem;
      }
      li.active{
        color: #FF9700;
        span{
          border-bottom: 2px solid #FF9700;
        }
      }
    }
    .tab-content {
      padding: 0.4rem 0;
      width: 100%;
      box-sizing: border-box;
      overflow: hidden;
      .picList {
        height: 3.16rem;
        border-bottom: 0.02rem solid #ddd;
        overflow: hidden;
        li {
          float: left;
        }
        li img {
          height: 3.16rem;
        }
      }
      /*游戏简介*/
      .intro-box{
        /*position: relative;*/
        font-size:0.3rem;
        padding: 0.3rem 0;
        /*background-color: #ccc;*/
        .title{
          color: #3C332B;
          height:0.6rem;
          line-height: 0.6rem;
          font-size:0.34rem;
          font-weight: bold;
          margin-bottom: 0.1rem;
        }
        .appNum{
          display: flex;
          flex-direction: column;
          text-align: center;
          .shengyu{
            color: #FF9700;
            font-weight: bold;
            font-size:0.76rem;
            margin-top: 0.4rem;
          }
        }
        .game-des{
          display: block;
          margin: 0.3rem 0 0.1rem 0;
          font-weight: bold;
        }
        .gameDes-text{
          height: 0.4rem;
          overflow: hidden;
          font-size:0.3rem;
          .look {
            color: rgba(0, 122, 255, 1);
            margin-left: 0.1rem;
            position: relative;
            top: 0.06rem;
          }

        }
        .gameDes-text.active{
          height: auto;
        }
      }
      .line{
        width: 100%;
        height:0.2rem;
        display: block;
        background-color: #F6F7FA;
      }
      article {
        padding: 0.3rem 0;
        line-height:0.48rem;
        p{
          font-weight: bold;
          color: #3C332B;
          font-size:0.34rem;
          margin-bottom: 0.4rem;
        }
        li{
          font-family:PingFangSC-Medium;
          font-weight:bold;
          span {
            display: inline-block;
            width: 1.14rem;
            margin-right: 0.2rem;
            font-size: 0.28rem;
            color: #565149;
            text-align: right;
            font-family:PingFangSC-Regular;
            font-weight:normal;
          }
        }

      }
    }
  }

</style>
