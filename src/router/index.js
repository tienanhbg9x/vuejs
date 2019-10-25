import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import listUser from '../components/listUser'
import App from '../App'

Vue.use(Router)

export default new Router ([
    { path:'/home', name:'homepage', component:Home  },
    { path:'/listUser', name:'listUser', component:listUser },
    { path:'/', name:'App', component:App  }
]);