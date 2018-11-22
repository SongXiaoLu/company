<template>
  <scroll :data="listData" class="wrapper">
    <div class="page scrollContent">
      <div class="content-box">
        <p class="title">{{details.title}}</p>
        <p class="date">
          <span><i class="iconfont">&#xe638;</i>发布于 {{details.releasetime}}</span>
          <!--<span><i class="iconfont">&#xe661;</i></span>-->
        </p>
        <div class="img-box">
          <img :src="details.coverphoto" alt="">
        </div>
        <div class="text">
          {{details.introduce}}
        </div>
      </div>
    </div>
  </scroll>

</template>
<script>
import scroll from '@/base/scroll'
import BScroll from 'better-scroll'
export default {
  name: 'reportDetails',
  components: {
    scroll
  },
  data () {
    return {
      id: null,
      details: {},
      listData: [],
      scroll: null
    }
  },
  methods: {
    initData () {
     this.$req.get('appAPI/getBaoDaoDetail',{id:'057ba9904c9c4b969180776ed1e9ab02'}).then(res => {
         this.listData=  res.data.baodaodetail
//        console.log(this.listData)
         this.details = res.data.baodaodetail[0]
        console.log(res.data, '报导')
      }).catch(err => {
        console.log(err)
      })
    },
    // 初始化
/*    _initScroll() {
      if ( !this.$refs.wrapper ) {
        return
      }
      console.log(this.listData, '初始化滚动时数据')
      console.log(this.$refs.wrapper)
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true
      })
      console.log(this.scroll)
    }*/
  },
  created () {
    this.initData()
    console.log('父组件created')
    this.id = this.$route.query.id
  },
  mounted(){
    console.log('父组件mounted')
   /* setTimeout(() => {
      this._initScroll()
    }, 100)*/
  }
}
</script>

<style type="text/scss" lang="scss" scoped>
  .scroll-view {
    /* -- Attention: This line is extremely important in chrome 55+! -- */
    touch-action: none;
    /* -- Attention-- */
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
  }
.content-box{
  padding: 0 0.32rem;
  .title{
    font-size:0.44rem;
  }
  .date{
    margin: 0.32rem;
    font-size:0.24rem;
    color: #A0988E;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .img-box{
    overflow: hidden;
  }
  .text{
    margin-top: 0.6rem;
    font-size:0.32rem;
    color: #333333;
    line-height: 0.64rem;
  }
}
</style>
