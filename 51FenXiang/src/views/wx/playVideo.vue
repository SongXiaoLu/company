<template>
   <div class="wx">
     <img class="close" src="../../assets/images/close.png" alt="">
     <div class="videobox">
       <video
         id="video1"
         src="src_mp4"
         preload="auto"
         webkit-playsinline
         playsinline
         x-webkit-airplay="allow"
         x5-video-player-type="h5"
         x5-video-player-fullscreen="true"
         x5-video-orientation="portraint"
         style="object-fit:fill">

       </video>
     </div>
     <div class="footer">
       <div class="left">
         <p>重庆公交打人女乘客身份曝光，知情人士：她是当地出了名的泼妇</p>
         <p class="num-box"><span><i class="icon-font">&#xe656;</i>111</span>
           <span><i class="icon-font">&#xe661;</i>111</span>
         </p>

       </div>
       <p class="right">
         <img src="../../assets/images/wx/video-share.png" alt="">
         <i class="share-text">纷享</i>
       </p>
     </div>
   </div>
    <!--<someComponent></someComponent>-->
</template>

<script>
    // import someComponent from './someComponent'
    export default {
        name: "playVideo",
        component: {
// someComponent
        },
        computed: {},
        data() {
            return {
                msg: "Hello Vue.js"
            }
        },
        methods: {},
        created() {
        }

    }
</script>

<style type="text/scss" lang="scss" scoped>
.wx{
  width: 100%;
  height: 100%;
  position: relative;
  background-color:#000000;
  .close{
    width: 0.64rem;
    height: 0.64rem;
    margin-top: 0.48rem;
    margin-left: 0.2rem;
  }
  .videobox {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 2.6rem;
    left: 0;
    background-color: #fff;
    video {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  }
  .footer {
    width: 100%;
    height: 2.4rem;
    background-color: #fff;
    background: rgba(0, 0, 0, 1);
    position: absolute;
    bottom: 0;
    padding: 0.3rem;
    box-sizing: border-box;
    display: flex;
    .left {
      width: 80%;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
     p{
        font-size: 0.28rem;
        line-height:0.6rem;
        color:rgba(255,255,255,1);
        font-weight: 500;
      }
      p.num-box{
        font-size: 0.2rem;
        line-height:0.4rem;
        font-weight: normal;
      }
    }
    .right{
      width: 20%;
      position: relative;
      img{
        width: 1.1rem;
        height: 1.1rem;
      }
      .share-text{
        font-size:0.2rem;
        font-family:PingFangSC-Regular;
        color:rgba(255,255,255,1);
        line-height:0.2rem;
        position: absolute;
        left: 0.4rem;
        top: 1.2rem;
      }
    }
  }
}
</style>
