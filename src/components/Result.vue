<template>
    <p> this is result: {{ result }} </p>
</template>

<script>
    export default {
        computed:{
            result(){
                return this.$store.getters.tenResult
            }
        }
    }
</script>

<style scoped>

</style>