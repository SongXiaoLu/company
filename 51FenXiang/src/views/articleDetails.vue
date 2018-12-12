<template>
<scroll :data="copyArr" :scrollHeight="scrollHeight">
  <div class="page" ref="page" v-if="query.isActivity==0">
    <header class="header">
     {{copy.title}}
    </header>
    <div class="time">
      <span><img class="icon" src="../assets/images/common/calendar.png" alt="">发布于{{copy.releasetime}}</span>
      <span class="eye"><img class="icon" src="../assets/images/common/eye.png" alt=""> {{copy.numberofreading}}</span>
    </div>
    <!--<img :src="copy.coverphoto" alt="" class="photo">-->
    <article class="text" v-html="copy.introduce">
    </article>
    <div class="transmit">
      <span>转发该文章可获得</span>
      <span>
        <img class="gold" src="../assets/images/金币.png" alt="">
        <i class="goldNum">+{{copy.money}}金币</i>
      </span>
    </div>
  </div>
  <div class="page" ref="page" v-if="query.isActivity==1">
    <header class="header">
      {{copy.title}}
    </header>
    <div class="time">
      <span><i class="iconfont">&#xe638;</i>发布于{{copy.createtime}}</span>
      <span><i class="iconfont eye">&#xe661;</i>{{copy.readnum}}</span>
    </div>
    <img :src="copy.detaildiagram" alt="" class="photo">
    <article class="text" v-html="copy.introduce">
    </article>
    <div class="transmit" v-if="query.isShow==0">
      <span>转发该文章可获得</span>
      <span>
        <img class="gold" src="../assets/images/金币.png" alt="">
        <i class="goldNum">+{{copy.money}} 金币</i>
      </span>
    </div>
  </div>
</scroll>
</template>

<script>
  import {mapGetters,mapMutations} from 'vuex'
  import scroll from '@/base/scroll'
  //  这个页面要接收 isActivity：0报道 1 活动  和 id详情,isShow,alipayId
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
        query: null,
        copyArr: [],
        copy: {},
        scrollHeight:0,
        countNum: 10 // 倒计时10秒
      }
    },
    methods: {
      ...mapMutations([
          'setIsShowDownApp',
           'setAlipayId',
           'setFromPage'
        ]
      ),
      //倒计时开始
      remainingTime(){
        clearInterval(this.timer);
        this.timer = setInterval(() => {
          this.countNum --;
//          console.log(this.countNum)
          if (this.countNum == 0) {
            clearInterval(this.timer);
//            console.log('倒计时结束');
            // 发请求
            this.$req.get('shareSuccess?alipayId=' + this.query.alipayId + '&sharegoodsId=' + this.query.id).then(res => {
              console.log(res, 'sharesuccess');
            }).catch(err => {
              console.log(err);
            })
          }
        }, 1000);
      },
      initData () {
        let url;
        if(this.query.isActivity == 0){
          url =  'getBaoDaoDetail'
        }else if(this.query.isActivity == 1){
          url = 'getPlayDetail'
        }
        this.$req.get(url,{id:this.query.id}).then(res => {
          console.log('报道',res.data.data);
          let original; // 源数据
          if ( this.query.isActivity == 0 ) {
            original = res.data.data
          } else if (this.query.isActivity == 1 ) {
            original = res.data.data.playDetail
          }
//          console.log(original);
          let originalArr =[]
          originalArr.push(original)
          this.copyArr = [...originalArr]
          this.copy =this.copyArr[0]
//          console.log(this.copy);
//          this.judge(this.query.isActivity)
        }).catch(err => {
          console.log(err)
        })
      },
    },
    created() {
//      this.$req.post('shareSuccess?alipayId='+this.query.+'&sharegoodsId=8f5ee39255014405be0aa35203e3a389').then(res=>{
//        console.log(res,'sharesuccess');
//      }).catch(err=>{
//        console.log(err);
//      })
      this.query = this.$route.query
      console.log('参数',this.query);
      this.setIsShowDownApp(this.query.isShow)
      this.setAlipayId(this.query.alipayId)
      this.setFromPage('articleDetails') // 文章页下载自己app,app详情下载详情里的app
      this.initData()
    },
    mounted() {
      // 分享出去倒计时 isShow：1分享出去 0 在APP里
      if(this.query.isShow == 1){
        this.remainingTime()
      }
      setTimeout(()=>{
        if(this.$refs.page){
          this.scrollHeight =this.$refs.page.offsetHeight
        }
//        console.log(this.scrollHeight);
      },1000)
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
      margin-left: 0.3rem;
    }
    .icon{
      width: 1.2em;
      height: 1.2em;
      position: relative;
      top: 0.06rem;
      margin-right: 0.2rem;
    }
  }
  .photo{
    width: 100%;
    /*height: 1500px;*/
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
