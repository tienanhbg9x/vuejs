<template>
    <header>
        <h1> {{ title }} <br> </h1>
        <button v-on:click="changeTitleHeader">Thay đổi title từ compHeader.vue</button>
    </header>
</template>
<script>
    export default {
        name:'compHeader',
        props:{
            title:String,
        },
        data(){
            return {
            }
        },
        methods: {
            changeTitleHeader: function (e) {
                console.log('Trước khi kích hoạt changeTitleEvent');

                const data = {
                    title: 'data-tryền qua biến event'
                };
                this.$emit('changeTitleEvent', data);
                console.log('Sau khi kích hoạt changeTitleEvent');
            }
        }
    }
    /*
        kích hoạt changTitleHeader trong compHeader.vue
        khi kích hoạt function bên ngoài app.vue nó sẽ chạy->
        khi function đó chạy->thay đổi dữ liệu
        khi dùng những sự kiện mặc định nó truyền sắn 1 biến event khi mình tự tạo event mới dữ liệu sẽ truyền
        trong biến this.$emit
     */
</script>
<style>

</style>