<template>
<div class="list-musiclist">
    <el-card :body-style="{padding:'0px',width:'160px',height:'280px'}" shadow="hover" class="musiclist-card">
    <img :src="item.coverImgUrl || item.sPicUrl || item.cover" :style="{width:'160px', height:'160px%'}" class="musiclist-image" />
    <slot>
        <div class="musiclist-amount">
        <i class="el-icon-headset" style="paddingTop: 4px;paddingLeft:15px"></i>
        <span>{{item.playCount >= 10000 ? (item.playCount/10000).toFixed(0)+'万' : item.playCount}}</span>
        </div>
        <div class="musiclist-top" v-if="topShow">
        <span style="font-size:12px;">{{item.name}}</span>
        </div>
    </slot>
    <div class="musiclist-play" v-if="topShow">
        <i class="el-icon-video-play"></i>
    </div>
    <!-- <div class="musiclist-title">{{item.name}}</div> -->
    </el-card>
</div>
</template>

<script>
export default {
    data(){
        return{
            topShow:true,
        }
    },
    props:{
        item:{
            type:Object,
            default(){
                return {};
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.list-musiclist{
    // display: flex;
    // flex-direction: column;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 10px;
  line-height: 1.5;

}
</style>