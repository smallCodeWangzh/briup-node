<template>
    <div>
        <h1>这是个登陆组件 ---- {{ msg }}</h1>
    </div>
</template>
<script>
    // 导出对象
    export default {
        data() {
            return {msg :  "李四"};
        },
        methods: {
            show() {
                console.info("sss");
            }
        }
    }
</script>
<style>

</style>