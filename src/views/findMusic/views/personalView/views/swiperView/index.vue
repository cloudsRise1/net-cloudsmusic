<template>
  <div class="personal-swiper">
    <el-carousel :interval="4000" type="card" class="swiper-form" height="200px">
        <el-carousel-item v-for="(item,index) in swipers" :key="index">
            <el-image
            @click="getMusic(item.targetId)"
            :src="item.imageUrl"
            :style="{width:'100%'}"
            fit="contain"
            ></el-image>
            <el-tag
            :type="item.typeTitle == '新碟首发' ? 'danger' : 'primary'"
            effect="dark"
            style="position: absolute; top:76%;right:0;border-radius: 10px 0 0 10px;height:19px;lineHeight:19px"
            >{{item.typeTitle}}</el-tag>
        </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import {
  getSwipers,
  getMusicUrl,
  getMusicMenu
} from '@/api/personalView'
export default {
  data(){
    return{
      swipers:[]
    }
  },
  created(){
    this.initSwipers()
  },
  methods:{
    //获取轮播图数据
    async initSwipers(){
      let response = await getSwipers();
      if(response.code == 200){
        this.swipers = response.banners
      }
    },
    getMusic(id){
      getMusicUrl(id).then(res => {
        const url = res.data[0].url
        this.$store.commit('NOW_MUSIC', url)
      })
      getMusicMenu(id).then(res => {
        const menu = res.songs[0]
        this.$store.commit('NOW_MUSICMENU', menu)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.personal-swiper{
    display: flex;
    width: 1200px;
    justify-content: center;
    .swiper-form{
      width: 1000px;
    }

}
</style>