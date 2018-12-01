<template>
<div class="main-box">
  两张占位图
  <img class="pic" src="" alt="">
  <img class="pic" src="" alt="">
</div>
</template>

<script>
  // import someComponent from './someComponent'
  export default {
    name: "appletDetails",
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

<style lang="scss" scoped>
.pic{
  width: 100%;
}
</style>
