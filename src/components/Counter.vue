<template>
    <div>
        <button class="btn btn-success" v-on:click="increment">Increment</button>
        <button class="btn btn-danger" v-on:click="decrementAsync">Decrement</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        name: "Counter",
        data() {
            return {}
        },
        methods: {
            ...mapActions(['increment','decrementAsync'])
        }
    }
</script>

<style scoped>

</style>