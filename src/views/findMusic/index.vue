<template>
    <div class="view-findmusic">
        <headerNav />
        <router-view></router-view>
    </div>
</template>

<script>    
import headerNav from './components/headerNav'
export default {
    components:{
        headerNav
    }
}
</script>

<style lang="scss" scoped>
.view-findmusic{
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    width: 1200px;
    height: 640px;
    overflow: auto;
    // 滚动条的样式,宽高分别对应横竖滚动条的尺寸
    &::-webkit-scrollbar {
        width: 6px;
        height: 1px;
        }
    
    // 滚动条里面默认的小方块,自定义样式
        &::-webkit-scrollbar-thumb {
        background: grey;
        border-radius: 10px;
        }
    
    // 滚动条里面的轨道
        &::-webkit-scrollbar-track {
        background: transparent;
        }   
}

</style>