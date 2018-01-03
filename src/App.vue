<template>

    <div id='main'>
        <!--mint-ui里的Header组件-->
        <mt-header fixed title="VUE2商城实例"></mt-header>

        <!--路由留下的坑-->
        <transition>
            <router-view></router-view>
        </transition>


    <!--mui里的tabbar组件-->
        <div>
            <nav class="mui-bar mui-bar-tab">
                <router-link class="mui-tab-item" to="/home">
                    <span class="mui-icon mui-icon-home"></span>
                    <span class="mui-tab-label">首页</span>
                </router-link>
                <router-link class="mui-tab-item" to="/member">
                    <span class="mui-icon mui-icon-email">
                        
                    </span>
                    <span class="mui-tab-label">会员</span>
                </router-link>
                <router-link class="mui-tab-item" to="/shopcar">
                    <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
                        <span class="mui-badge">0</span>
                    </span>
                    <span class="mui-tab-label">购物车</span>
                </router-link>
                <router-link class="mui-tab-item" to="search">
                    <span class="mui-icon mui-icon-gear"></span>
                    <span class="mui-tab-label">搜索</span>
                </router-link>
            </nav>
        </div>
    </div>

</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {};
  },
  methods: {

  }
}
</script>

<style scoped>
#main {
  padding: 40px 0;
  overflow-x:hidden;
}
.v-enter{
    opacity: 0;
    transform:translateX(100%)
}
.v-leave-to{
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
}
.v-enter-active,.v-leave-active{
    transition:all 0.5s ease;
}
</style>

