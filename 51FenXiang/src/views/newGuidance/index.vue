<template>
  <div ref="wrapper" class="wrapper">
    <div class="page" ref="page">
      <img class="guidance" :src="url" alt="">
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "newGuidance",
    components: {
      BScroll
    },
    computed: {
      url(){
      let img=  this.imgs[0]
        return img.url
      }
    },
    data() {
      return {
        imgs: [
          {url: require('../../assets/images/new_guidance.png'), title: '新手指南', id: 1},
        ],
        scrollerHeight: 0, // 触发刷新
      }
    },
    methods: {
      // 初始化
      _initScroll() {
        if (!this.$refs.wrapper) {
          return
        }
        this.scroll = new BScroll(this.$refs.wrapper, {})
//        console.log(this.scroll.scrollerHeight);
        this.scrollerHeight = 1239
      },
      refresh() {
        this.scroll && this.scroll.refresh()
      },
    },
    watch:{
      scrollerHeight(){
        setTimeout(() => {
          console.log(this.scrollerHeight,'watch');
          this.refresh()
        }, 20);
      }
    },
    created() {
    },
    mounted() {
      setTimeout(() => {
        this._initScroll()
//        console.log(this.$refs.page);
      }, 20);
//      console.log(this.scrollerHeight);
    }


  }
</script>

<style lang="scss" scoped>
  .wrapper{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
.guidance{
  width: 100%;
}
</style>
