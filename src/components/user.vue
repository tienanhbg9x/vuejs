<template>
    <div class="user">
        <h3>{{ user.email }} </h3>
        <button v-on:click="handleDelete" class="delete">Delete</button>
    </div>
</template>

<script>
    export default {
        name: "user.vue",
        props:{
            user: {
                type:Object,
                default: null
            }
        },
        data(){
            return {
                text:'Comp User'
            }
        },
        methods:{
            handleDelete(){
                var data = {
                    id:this.user.id
                };
                // console.log('hanleDelete trong user.vue');
                this.$emit('deleteUser', data);

            }

        }
    }
</script>

<style scoped>
    .user {
        border: 1px solid #333;
        padding: 10px;
        margin-bottom: 20px;
        margin-top: 20px;
        position: relative;
    }
    .user .delete {
        position: absolute;
        top: 0;
        right: 0;
    }
</style>