<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1> Vue Resource </h1>
                <div class="form-group">
                    <input type="text" class="form-control" v-model="user.username">
                    <input type="text" class="form-control" v-model="user.email">
                    <button class="btn btn-block btn-success" v-on:click="handleClick" type="submit">Submit</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "vueResource",
        data() {
            return {
                user:{
                    username:'',
                    email:''
                }
            };
        },
        method: {
            handleClick(){
               // console.log(this.user)
                this.$http.post('https://vue-form-881997.firebaseio.com/data.json', this.user)
                    .then(response => {
                        console.log(response)
                    },error => {
                        console.log(error)
                    })
            }
        }
    }
</script>

<style scoped>

</style>