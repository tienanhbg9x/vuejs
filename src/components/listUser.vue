<template>
    <div class="list-user">
        <user  v-for="user in listUser"
               v-bind:key="user.id"
               v-bind:user="user"
               v-on:deleteUser="deleteUser"/>
        <!--<user/>-->
        <!--<user/>-->
        <!--<user/>-->
    </div>
</template>

<script>
    /*
        App
            listUser->không được quyền thay đổi listUser->truyền event một lần nữa ra ngoài app
                User -> truyền event thông báo cho thằng listUser
                User
                User
     */
    import user from './user.vue'
    export default {
        name: "listUser.vue",
        props:{
          listUser: {
              type:Array,
              default:[]
          }
        },
        data(){
            return {

            }
        },
        methods:{
          deleteUser(data){
             // console.log('deleteUser listUser.vue',data);
             this.$emit('deleteUserEvent', data);
          }
        },
        components:{
           user
        }
    }
</script>

<style scoped>
    .list-user {
        display: flex;
        flex-wrap:wrap;
        justify-content: space-between;
    }
</style>