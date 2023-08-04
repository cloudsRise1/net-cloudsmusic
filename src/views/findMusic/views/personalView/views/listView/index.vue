<template>
  <div class="personal-list">
    <listHeader />
    <div class="list-items">
    <listItem v-for="(item,index) in musicList" :key="index" :item="item" />
    </div>
  </div>
</template>

<script>
import listHeader from './views/listHeader'
import listItem from './views/listItem'
import{
  getMusicList
} from '@/api/personalView'

export default {
  components:{
    listHeader,
    listItem
  },
  data(){
    return{
      musicList:{}
    }
  },
  created(){
    this.initMusicList()
  },
  methods:{
    //获取十条数据来展示
    async initMusicList(){
      let response = await getMusicList()
      this.musicList = response.playlists.slice(0,10)
      console.log(this.musicList)
    }
  }
}
</script>

<style lang="scss" scoped>
.personal-list{
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: space-around;
    // flex-wrap: wrap;
    .list-items{
      display: flex;
      // justify-content: center;
      justify-content: space-around;
      flex-wrap: wrap;
      width: 900px;
      // height: 600px;
    }
}
</style>