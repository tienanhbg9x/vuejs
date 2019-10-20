<template>
    <div class="comp-tabs">
        <div class="tabs-title">
                <span> {{ title }} </span>
                <i class="icon ion-md-heart"></i>
        </div>
        <div class="tab-content">
                <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "compTabs",
        props:{
            title:String,
        },
        methods:{

        },
        data(){
            return {

            }
        }
    }
</script>

<style scoped>

</style>