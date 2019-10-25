<template>

  <div id="app">
      <div class="container">
          <button type="submit" v-on:click="title = 'Học lập trình vuejs'">thay đổi title từ component app.vue</button>
          <comp-header
                  v-on:changeTitleEvent="handleChangeTitle"
                  v-bind:title="title"/>
          <list-user
                  v-bind:listUser="listUser"
                  v-on:deleteUserEvent="handleDeleteUser"/>
          <comp-footer v-bind:title="title"/>
          <demo-ref/>
          <demo-slot/>
          <!--<router-view/>-->
          <br>
          <other/>
          <br>
          <app-result/>
          <br>
          <app-counter/>
      </div>
  </div>

</template>

<!--các component App-->
            <!--header-->
            <!--listProduct-->
                  <!--product-->
                  <!--product-->
                  <!--product-->
                  <!--product-->
            <!--footer-->
<script>

    import compHeader from './components/compHeader.vue';
    import compFooter from './components/compFooter.vue';
    import listUser from './components/listUser';
    import demoRef from "./components/demoRef";
    import demoSlot from "./components/demoSlot";
    import other from "./components/Other"
    import AppCounter from "./components/Counter"
    import AppResult from "./components/Result"
    // import vueResource from "./components/vueResource"
    // import compTabs from "./components/compTabs"

export default {
  name: 'app',
  data () {
    return {
      title:'Tiến Anh vue',
        listUser:[
            { id:100, email:'tienanh@gmail.com',active:false },
            { id:101, email:'tienanh1@gmail.com',active:true },
            { id:102, email:'tienanh2@gmail.com',active:false },
            { id:103, email:'tienanh3@gmail.com',active:true },
            { id:104, email:'tienanh4@gmail.com',active:false },
            { id:105, email:'tienanh5@gmail.com',active:true },
            { id:106, email:'tienanh6@gmail.com',active:true },
        ],
        resource:{}
    }

  },
    methods:{
        handleChangeTitle(data){
            // this.title = 'Do thằng header thay đổi'
            this.title = data.title;
            // console.log('handleChangeTitle được gọi khi kích hoạt thành công App.vue', data);
        },
        handleDeleteUser(data){
            var indexDelete = -1;
            this.listUser.forEach((u, idx) => {
                // console.log(u.id,idx,data.id);
                if(u.id == data.id){
                    indexDelete = idx;
                }
            });
            if (indexDelete != -1){
                this.listUser.splice(indexDelete,1);
            }
            // console.log('handleDeleteUser trong app.vue', data)
        },

    },
  components:{
      compFooter,
      compHeader,
      listUser,
      demoRef,
      demoSlot,
      other,
      AppCounter,
      AppResult
      // vueResource,
      // compTabs
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  font-weight: normal;
}

</style>
