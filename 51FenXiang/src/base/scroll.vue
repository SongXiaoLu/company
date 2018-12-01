<template>
  <div ref="wrapper" class="wrapper">
    <slot></slot>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  export default {
    props: {
      scrollHeight:{
        type:Number
      },
      probeType: {
        type: Number,
        default: 1
      },
      click: {
        type: Boolean,
        default: true
      },
      data: {
        type: Array,
        default: null
      },
      scrollX: {
        type: Boolean,
        default: false
      },
      // 监听滚动事件（左右联动时）
      listenScroll: {
        type: Boolean,
        default: false
      },
      pullUp: {
        type: Boolean,
        default: false
      },
      pulldown: {
        type: Boolean,
        default: false
      },
      beforeScroll: {
        type: Boolean,
        default: false
      },
      refreshDelay: {
        type: Number,
        default: 20
      }
    },
    data() {
    return{
    }
    },
    created(){
//      console.log('scroll,created');
    },
    mounted() {
//      console.log('scroll,mounted');
      setTimeout(() => {
        this._initScroll()
      }, 20);
    },
    methods: {
      // 初始化
      _initScroll() {
        if (!this.$refs.wrapper) {
          return
        }
        this.scroll = new BScroll(this.$refs.wrapper, {
          probeType: this.probeType,
          click: this.click,
          scrollX: this.scrollX
        })
//        console.log(this.scroll);
//        console.log('this.scroll.wrapperHeight',  this.scroll.wrapperHeight);
//        console.log('this.scroll.scroller.scrollHeight', this.scroll.scroller.scrollHeight);

        if (this.listenScroll) {
          let _this = this
          this.scroll.on('scroll', pos => {
            // 派发事件获取pos 值
            // 这的this指向this.scroll（实例）
            _this.$emit('scroll', pos)
          })
        }
        // 开启上拉刷新事件
        if (this.pullUp) {
          this.scroll.on('scrollEnd', () => {
            if (this.scroll.y <= (this.scroll.maxScrollY + 50)) { // 当滚动距离离底部50 像素的时候，派发事件，父级监听此事件做再次请求数据接口
              this.$emit('scrollToEnd')
            }
          })
        }
        // 是否派发顶部下拉事件，用于下拉刷新
        if (this.pulldown) {
          this.scroll.on('touchend', (pos) => {
            // 下拉动作
            if (pos.y > 50) {
              this.$emit('pulldown')
            }
          })
        }

        // 开始滚动前判断
        if (this.beforeScroll) {
          this.scroll.on('beforeScrollStart', () => {
            this.$emit('beforeScroll')
          })
        }
      },
      enable() {
        this.scroll && this.scroll.enable()
      },
      disable() {
        this.scroll && this.scroll.disable()
      },
      refresh() {
        this.scroll && this.scroll.refresh()
      },
      // 滚动到相应位置
      scrollTo() {
        this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
      },
      scrollToElement() {
        this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
      }
    },
    watch: {
      // 监听数据动态变化，触发refresh
      data() {
        setTimeout(() => {
          this.scroll.refresh()
        }, this.refreshDelay)
      },
      scrollHeight(val1,val2) {
//       console.log(val1, val2);
       setTimeout(() => {
          this.scroll.refresh()
        }, this.refreshDelay)
      }
    }
  }
</script>
<style>
  .wrapper{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
