<template>
    <div>{{msg}}</div>
    <!--<someComponent></someComponent>-->
</template>

<script>
    // import someComponent from './someComponent'
    export default {
        name: "error404",
        component: {
// someComponent
        },
        computed: {},
        data() {
            return {
                msg: "404页面"
            }
        },
        methods: {},
        created() {
        }

    }
</script>

<style lang="scss" scoped>

</style>
