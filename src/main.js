import Vue from 'vue'
import App from './App.vue'  //根组件


//vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)


//路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'



//导入mint-ui中的组件
import {Button,Header,Swipe, SwipeItem} from 'mint-ui'
Vue.component("mybtn",Button)
Vue.component('mt-header',Header)
Vue.component("mt-swipe", Swipe);
Vue.component("mt-swipe-item", SwipeItem);


//导入mui的css样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'




//Vue实例
var vm = new Vue({
    el:"#app",
    data:{
        
    },
    methods:{

    },
    render:(create)=>create(App),
    router:router       
})

