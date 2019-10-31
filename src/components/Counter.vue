<template>
  <div>
    <button class="btn btn-success" v-on:click="increment">Increment</button>
    <button class="btn btn-danger" v-on:click="decrementAsync">Decrement</button>
    <br>
    <hr>
    <input type="text" v-model="value">
    <p>Text test: {{ value }}</p>
  </div>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        name: "Counter",
        data() {
            return {}
        },
        computed: {
            value() {

              }
            },

        methods: {
            ...mapActions(['increment','decrementAsync']),
        }
    }
</script>

<style scoped>

</style>
