<template>
  <scroll :data="listData">
    <ul class="list">
      <li v-for="(item,index) in listData" @click="goDetail(item.id)">
        <img :src="item.coverphoto" alt="">
    <div class="des">
      <p class="title">
        {{item.title}}
      </p>
      <div class="time-box">
       <i class="bgImg">最新</i>
        <span class="time">
          {{item.releasetime}}
        </span>
      </div>
    </div>
      </li>
    </ul>
  </scroll>

  <!--<someComponent></someComponent>-->
</template>

<script>
  import scroll from '@/base/scroll'
  export default {
    name: 'report',
    components: {
      scroll
    },
    data () {
      return {
        listData:[]
      }
    },
    methods: {
      goDetail (id){
        this.$router.push({path: 'reportDetails', query: {id: id}
        })
      },
      initData () {
        this.$req.get('getBaoDaoSimple').then(res => {
          console.log(res.data)
         this.listData = res.data.baodaodetail
        }).catch(err => {
          console.log(err)
        })
      }
    },
    created () {
      this.initData()
    }
  }
</script>

<style type="text/scss" lang="scss" scoped>
  .list{
    width: 100%;
    li{
      padding: 0.4rem;
      position: relative;
      height: 2.4rem;
      padding: 0.4rem 0.2rem;
      box-sizing: border-box;
      border-bottom:0.5px solid #ddd;
      img{
        width: 2.4rem;
        float: left;
        /*margin-right: 0.2rem;*/
      }
      .des{
        /*overflow: hidden;*/
        margin-left:2.6rem ;
        p.title{
          font-size:0.32rem;
          font-weight:bold;
           height:0.8rem;
           overflow: hidden;
          /*text-overflow: ellipsis;*/
          /*white-space: nowrap;*/
        }
        .time-box{
        margin: 0.3rem 0;
          height: 0.6rem;
          /*background-color: #ccc;*/
          .bgImg{
            font-size:0.24rem;
            padding:0.04rem 0.08rem;
            float: left;
            background-color:#FF9700;
            text-align: center;
            color: #FF6B00;
            font-style:normal;
          }
          .time{
            float: right;
            font-size: 0.26rem;
            color: #C2BDB6;
          }}

      }

    }
  }
</style>

