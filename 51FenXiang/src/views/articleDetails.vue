<template>
<scroll :data="copyArr">
  <div class="page">
    <header class="header">
     {{copy.title}}
    </header>
    <div class="time">
      <span><i class="iconfont">&#xe638;</i>发布于{{copy.date}}</span>
      <span><i class="iconfont eye">&#xe661;</i>{{copy.reading}}</span>
    </div>
    <img :src="copy.img" alt="">
    <article class="text">
     {{copy.text}}
    </article>
    <div class="transmit" v-if="isShowShare">
      <span>转发该文章可获得</span>
      <span>
        <img class="gold" src="../assets/images/金币.png" alt="">
        <i class="goldNum">+金币</i>
      </span>
    </div>
    <!--验证滚动-->
    <!--<div style="height: 900px;background-color:#cccccc;width: 100%;"></div>-->
  </div>
</scroll>
</template>

<script>
  import scroll from '@/base/scroll'
//  这个页面要接收type和id
  export default {
    name: "",
    computed:{
    },
    props:{
    },
    components: {
      scroll
    },
    computed: {},
    data() {
      return {
        copyArr:[],
        copy:{},
        type:0, // 页面来源
        isShowShare:false
      }
    },
    methods: {
      // 判断类型，报道 活动
      judge(type){
        switch(type){
          case 0:
            this.copy.img = this.copy.coverphoto
            this.copy.text = this.copy.introduce
            this.copy.reading = this.copy.numberofreading
            this.copy.date = this.copy.releasetime
            this.copy.title = this.copy.title
            break;
          case 1:
            this.copy.img = this.copy.detaildiagram
            this.copy.text = this.copy.introduce
            this.copy.reading = this.copy.readnum
            this.copy.date = this.copy.createtime
            this.copy.title = this.copy.title
            break;
        }
      },
      initData () {
        console.log(1);
        let api;
        if(this.type === 0){
          api = 'appAPI/getBaoDaoDetail'
        }else if(this.type === 1){
          api = 'appAPI/getPlayDetail'
        }
        this.$req.get(api,{id:'057ba9904c9c4b969180776ed1e9ab02'}).then(res => {
//          console.log('报道',res.data);
          let original;
          if ( this.type == 0 ) {
            original = res.data.baodaodetail // 必须是数组
          } else if ( this.type == 1 ) {
            original = res.data.playdetail
          }
          this.copyArr = [...original]
          this.copy =this.copyArr[0]
          this.judge(this.type)
        }).catch(err => {
          console.log(err)
        })
      },
    },
    created() {
//      this.initData()
    }

  }
</script>

<style type="text/scss" lang="scss" scoped>
.header{
  width:6.86rem;
  font-size:0.44rem;
  font-family:PingFangSC-Medium;
  font-weight:500;
  color:rgba(51,51,51,1);
  line-height:0.64rem;
}
  .time{
    height: 1.2rem;
    font-size:0.24rem;
    font-family:PingFangSC-Medium;
    color:rgba(160,152,142,1);
    padding-top: 0.32rem;
    box-sizing: border-box;
.eye{
  margin-left: 0.2rem;
}
  }
  .text{
    margin-top:0.6rem;
    font-size:0.32rem;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:0.64rem;
  }
  .transmit{
    height: 0.7rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom:2px solid #F5F5F5;
    border-top:2px solid #F5F5F5;
    margin-top: 0.6rem;
    font-size:0.28rem;
    font-family:PingFangSC-Regular;
    color:rgba(160,152,142,1);
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
</style>
