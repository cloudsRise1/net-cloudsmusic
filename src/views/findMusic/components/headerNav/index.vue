<template>
  <div class="find-header">
    <el-tabs v-model="activeNav" @tab-click="handleClick" class="header-tabs">
      <el-tab-pane
        class="tabs-item"
        type="border-card"
        v-for="item in tabs"
        :key="item.nav"
        :label="item.title"
        :name="item.nav"
      ></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data(){
    return{
      activeNav:'/findmusic/personalView',
      tabs:[
        {nav:'/findmusic/personalView',title:'个性推荐'},
        {nav:'/findmusic/listView',title:'歌单'},
        {nav:'/findmusic/radioView',title:'主播电台'},
        {nav:'/findmusic/rankView',title:'排行榜'},
        {nav:'/findmusic/songerView',title:'歌手'},
        {nav:'/findmusic/latestView',title:'最新音乐'},
      ]
    }
  },
  methods:{
    handleClick(){
      this.$router.replace(this.activeNav);
    }
  }
}
</script>

<style lang="scss" scoped>
.find-header{
  display: flex;
  flex-direction: row;
  justify-content: center;
  width:1200px;
  height: 60px;
}
</style>