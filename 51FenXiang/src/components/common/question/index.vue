<template>
  <scroll :data="titleList">
   <div class="container">
    <!-- <section class="notice">
       <P>用户必读666</P>
       <span>{{notice}}</span>
     </section>-->
       <div class="title-box" v-for="(item,index) in titleList">
         <div class="title">
           <i class="num">{{item.id}}</i>
           <span>{{item.title}}</span>
            <p class="arrowsBox" @click="showFn(index)">
              <img  class="arrows" src="../../../assets/images/common/down_arrows.png">
            </p>
       </div>
         <!--具体内容-->
         <transition name="fade">
           <div class="des" v-if="index===activeTab " v-html="item.des">
           </div>
         </transition>
   </div>
   </div>>
  </scroll>
</template>

<script>
  import scroll from '@/base/scroll'
  export default {
    name: "",
    components: {
      scroll
    },
    computed: {},
    data() {
      return {
        isUnfold:false,
        notice:'',
        titleList:[],
        activeTab:null
      }
    },
    methods: {
      setQSText(index) {
        let QSText;
        switch(index){
          case 0:
           return QSText='1、纷享币是什么？</br>' +
              '纷享币是一种代币，您可以通过分享文章、应用等后并取得了点击即可获得。获得的纷享币可以转成零钱存入您的账户，攒到一定额度的零钱后就可以申请提现。</br>' +
              '2、纷享币要如何转成零钱？</br>' +
              '您可以进入【我的】页面，点击【我的钱包】中的【纷享币】页面，转成零钱即可。</br>' +
              '3、如何获得纷享币/零钱？</br>' +
              '可以通过以下的方式获得纷享币/零钱：</br>' +
              '首次注册即可获得5元，自动入账零钱</br>' +
              '分享：每日把文章或应用分享给朋友或朋友圈、微博等平台，您的好友通过您的分享阅读文章（认真阅读，刷的不算）和下载应用，您就可以获得相应的纷享币。</br>' +
              '例：一位好友阅读一篇文章您可获2000纷享币，十位好友阅读您即可获得2000*10=20000纷享币，每天最多可拿100000纷享币</br>' +
              '4、在哪里看收益？</br>' +
              '可以在【我的】页面查看目前的零钱/纷享币</br>' +
              '5、有人点击了分享的文章链接为什么没有获得纷享币？</br>' +
              '点击进入文章链接后需要认真阅读文章（页面停留10秒以上）即可获得纷享币，为避免有用户作弊，时间过短均不计入有效阅读不获得纷享币。</br>'
          case 1:
           return QSText='1、如何提现？</br>' +
              '当您的零钱达到20元，即可进入【我的钱包】页面，【零钱】栏中点击【立即提现】按钮。提现金额分别为20、30、50、100、200、500、1000，满足金额就可以提现啦（提现前请确定绑定的支付宝正常使用）。</br>' +
              '2、提现多久到账？</br>' +
              '提现一般经过1~3个工作日审核后到账（如遇提现高峰，会延长打款时间）。</br>'
            break;
          case 2:
          return  QSText= '1、商家要投放广告</br>' +
              '您可以进入首页【投放广告】，填写真实姓名、电话和验证码后点击【提交表单】，提交成功后会有业务人员与您联系，您仅需耐心等待即可。</br>' +
              '2、有广告资源或想加入51纷享成为合伙人</br>' +
              '您可以进入首页【邀请入伙】，填写真实姓名、电话和验证码后点击【提交表单】，提交成功后会有业务人员与您联系，您仅需耐心等待即可。</br>'
        }
      },
      setDesProp (index, des){
        this.$set(this.titleList[index], 'des', des);
      },
      showFn(index){
//        console.log(index);
        this.activeTab= index
        this.isUnfold = ! this.isUnfold
        let des = this.setQSText(index)
        this.setDesProp(index, des)
//        console.log(this.isUnfold);
      }
    },
    created() {
      this.titleList=[{'id':'Q1', title:'针对纷享币相关疑问'},{'id':'Q2', title:'针对提现'},{'id':'Q3', title:'针对合伙'}]
      this.notice =
        '针对异常行为处理\n' +
        '我们应用先进的人工智能分析您的行为，如发现造假、刷单等违规操作，我们有权阻止您使用（获取纷享币、转换零钱、提现等）以及取消您获得的奖励并永久封号处理。\n' +
        '具体违规行为包括但不限于下面列举：\n' +
        '使用具有作弊嫌疑的高危手机号；\n' +
        '使用同一个手机反复登录多个账号；\n' +
        '使用模拟器；\n' +
        '使用APP分身软件；'
        }

  }
</script>

<style type="text/scss" lang="scss" scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .container{
    width: 100%;
    background:rgba(250,249,248,1);
    font-size:0.28rem;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(86,76,73,1);
    line-height:0.56rem;
    .notice{
      padding: 0.3rem;
      box-sizing: border-box;

    }
   .title-box {
     padding: 0 0.2rem;
     box-sizing: border-box;
      background-color: #fff;
      margin-top: 0.3rem;
     div.title {
       display: flex;
        flex-direction: row;
        position: relative;
        font-size:0.3rem;
        padding-top: 0.3rem;
        padding-bottom: 0.3rem;
        font-family:PingFangSC-Medium;
        font-weight:500;
        .num {
          width: 0.48rem;
          height: 0.48rem;
          line-height: 0.48rem;
          display: inline-block;
          margin-right: 0.3rem;
          color: white;
          border-radius: 50%;
          text-align: center;
          background: linear-gradient(180deg, rgba(254, 200, 67, 1) 0%, rgba(255, 159, 25, 1) 100%);
        }
       .arrowsBox{
         width: 0.8rem;
         height: 0.6rem;
         position: absolute;
         right: 0;
         top: 0.3rem;
       }
        .arrows {
          width: 0.28rem;
          height: 0.16rem;
          margin-left: 0.2rem;
        }
      }
      div.des{
        padding: 0.3rem 0;
        border-top: 2px solid #F3F0ED;
        box-sizing: border-box;
      }
    }

  }

</style>
