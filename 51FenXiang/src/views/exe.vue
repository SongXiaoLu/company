<template>
  <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
</template>

<script>
  export default {
    props:{
      picArr:{
        type:Array
      }
    },
    data () {
      return {
        slide1: [
          {
            src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
            msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
            alt: 'picture1',
            title: 'Image Caption 1',
            w: 600,
            h: 400
          },
          {
            src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
            msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
            alt: 'picture2',
            title: 'Image Caption 2',
            w: 1200,
            h: 900
          }
        ]
      }
    },
    methods: {
      handleClose () {
        console.log('close event')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .imgList{
  .imgList li{
    float: left;
  }
  .imgList li img {
    width: 0.3rem;
    height: 1.5rem;
  }
  }
  .imgMask{
    position: absolute;
    height: 100%;
    width:100%;
    top:0;
    left:0;
    z-index: 100;
    background:rgba(0,0,0,.6);
  }
  .showImg{
    height:5.50rem;
    width:8rem;
    position: absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    border:10px solid #fff;
  }
  .bigImg{
    width:100%;
    height:100%;
  }
  .prev{
    position: absolute;
    top:50%;
    left:10px;
    width:40px;
    transform:translate(10px,-50%);
  }
  .next{
    width:40px;
    transform:translate(10px,-50%);
    position: absolute;
    top:50%;
    right:20px;
  }
</style>
