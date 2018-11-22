<template>
    <div class="btn" @click="btnFn" :style="{background:bgColor,width:width+'rem',height:height+'rem'}">
      <span> <img src="../assets/images/share.png">分享</span>
    </div>
</template>

<script>
  export default {
    name: "btn",
    props: {
      width: {
        type: Number
      },
      height: {
        type: Number
      },
      bgColor: {
        type: String
      }
    },
    computed: {},
    data() {
    },
    methods: {
      btnFn() {
        this.$emit('btnFn')
      }
    },
    created() {
    }

  }
</script>

<style type="text/scss" lang="scss" scoped>
.btn{display: flex;
  align-items: center;
  justify-content: center;
  width:6.7rem;
  height:0.82rem;
  background:linear-gradient(90deg,rgba(254,200,67,1) 0%,rgba(255,159,25,1) 100%);
  border-radius:0.1rem;
  margin: auto;
  span{
    font-size:0.32rem;
    font-family:PingFangSC-Regular;
    color:rgba(255,255,255,1);
    display: inline-block;
    img{
      width: 0.36rem;
      height: 0.36rem;
      margin-right: 0.1rem;
      position: relative;
      top: 0.06rem;

    }
  }
}
</style>
