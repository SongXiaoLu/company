<template>
 <div>
   <articleDetails :data="data"></articleDetails>
<!--   <B  @btnFn="fn2">
   </B>
   <downApp @down="fn"></downApp>-->
 </div>
    <!--<someComponent></someComponent>-->
</template>

<script>
  import downApp from '@/base/downApp'
  import B from '@/base/button'
  import articleDetails from '@/components/articleDetails'

  export default {
    name: "exa",
    components: {
      downApp,
      B,
      articleDetails
    },
    computed: {},
    data() {
      return {
      data: [
        {
          "createtime": "2018-10-25 10:35:52",
          "money": "10000",
          "readnum": "1",
          "introduce": "▼广告一下",
          "huodongType": "",
          "id": "42ad6c59dd084d80926bbbbc05daab10",
          "title": "宁波安排上了！汤唯张震都爱的小蓝杯来啦！",
          "detaildiagram": "http://47.106.189.124/appAPI/image/activity_8_2.png"
        }
      ]
      }
    },
    methods: {
      fn() {
        console.log('down');
      },
      fn2() {
        console.log('d');
      }
    },
    created() {
    }

  }
</script>

<style lang="scss" scoped>

</style>
