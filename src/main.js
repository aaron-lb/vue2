import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'  //根组件

Vue.use(VueRouter)

//导入mint-ui中的组件
import {Button,Header} from 'mint-ui'
Vue.component("mybtn",Button)
Vue.component('mt-header',Header)

//导入mui的css样式
import './lib/mui/css/mui.min.css'

var router = new VueRouter({
    routes:[]
})

new Vue({
    el:"#app",
    data:{
        
    },
    methods:{

    },
    render:(create)=>create(App),
    router:router       
})

