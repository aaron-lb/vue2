//路由模块
import VueRouter from 'vue-router'

//导入各个模块
import homeContainer from'./components/tabbar/homeContainer.vue'
import memberContainer from './components/tabbar/memberContainer.vue'
import shopcarContainer from './components/tabbar/shopcarContainer.vue'
import searchContainer from './components/tabbar/searchContainer.vue'

var router = new VueRouter({
    routes:[
        {path:'/home',component:homeContainer},
        {path:'/member',component:memberContainer},
        {path:'/shopcar',component:shopcarContainer},
        {path:'/search',component:searchContainer}
    ],
    linkActiveClass:'mui-active'
})


export default router