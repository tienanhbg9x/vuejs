<template>
    <div class="demo-ref">
        <h1>text</h1>
        <button v-on:click="handleClickInputFile"
                class="avatar">Thay đổi avatar</button>
        <input
                ref="fileInputAvatar"
                type="file" style="display: none">
    </div>
</template>

<script>
    export default {
        name: "demoRef.vue",
        data(){
            return
        },
        methods:{
            handleClickInputFile(e){
                console.log(this.$refs.fileInputAvatar.click())  //$refs gọi đến file input
            }
        }
    }
</script>

<style scoped>
    .demo-ref {
        margin-top: 100px;
        padding: 50px 50px;
        border: 1px solid red;
        transition: all .3s ease;
    }
    .avatar:hover {
        background: aqua;
    }
</style>