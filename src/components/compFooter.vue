<template>
    <footer><h1> {{ title }} </h1></footer>
</template>

<script>
    export default {
        name: "compFooter.vue",
        props:{
          title:{
              type:String,
              default:'Giá trị mặc định khi không truyền'
          },
        },
        data(){
            return {
            }
        }
    }
</script>

<style scoped>

</style>