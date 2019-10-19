<template>
    <div class="demo-slot">
        <h1>DemoSlot</h1>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "demoSlot",
        data(){
            return
        },
        methods:{

        }
    }
</script>

<style scoped>
    .demo-slot {
        margin-top: 50px;
        padding: 15px 20px;
        border: 2px solid aqua;
    }
</style>