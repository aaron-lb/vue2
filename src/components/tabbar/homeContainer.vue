<template>

    <div>
        <!--mint-ui的轮播图-->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for='item in lunbotuList' :key='item.img'>
                <img :src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe>
    </div>

</template>


<script>
import { Toast } from 'mint-ui';
export default {
    data(){
        return{
            lunbotuList:[]
        }
    },
    created(){
        this.getLunbotu()
    },
    methods:{
        getLunbotu(){
            this.$http.get("http://vue.studyit.io/api/getlunbo").then(res=>{
                if(res.body.status===0){
                    this.lunbotuList = res.body.message
                }else{
                    Toast('加载失败')
                }
            })
        }
    }
};
</script>


<style lang="less" scoped>

.mint-swipe{
    height: 200px;
    img{
        height:100%;
        width:100%;
    }
}
</style>
