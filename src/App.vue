<template>

    <div id='main'>
        <mt-header fixed title="VUE2商城实例"></mt-header>

        <h1>这是App.vue根组件</h1>

        <div>
            <nav class="mui-bar mui-bar-tab">
                <a class="mui-tab-item mui-active" href="#tabbar">
                    <span class="mui-icon mui-icon-home"></span>
                    <span class="mui-tab-label">首页</span>
                </a>
                <a class="mui-tab-item" href="#tabbar-with-chat">
                    <span class="mui-icon mui-icon-email">
                        <span class="mui-badge">9</span>
                    </span>
                    <span class="mui-tab-label">消息</span>
                </a>
                <a class="mui-tab-item" href="#tabbar-with-contact">
                    <span class="mui-icon mui-icon-contact"></span>
                    <span class="mui-tab-label">通讯录</span>
                </a>
                <a class="mui-tab-item" href="#tabbar-with-map">
                    <span class="mui-icon mui-icon-gear"></span>
                    <span class="mui-tab-label">设置</span>
                </a>
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
}
</style>

