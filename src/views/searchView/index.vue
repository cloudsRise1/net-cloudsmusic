<template>
    <div class="form-search">
        <div class="search-header">
            通过搜索<span class="header-font">" {{  keywords  }} "</span>已为你找到 {{ playlistCount }} 首歌曲
        </div>
        <div class="search-table">
            <el-table 
            :data="playLists"
            v-loading="isloading"
            @row-dblclick="playMusic"   
            >
                <el-table-column type="index" label="序号" width="200">
                </el-table-column>
                <el-table-column label="操作" width="200">
                    <i class="el-icon-star-on"></i>
                </el-table-column>
                <el-table-column prop="name" label="音乐标题" width="200">
                </el-table-column>
                <el-table-column prop="ar[0].name" label="歌手" width="200">
                </el-table-column>
                <el-table-column prop="al.name" label="专辑" width="200">
                </el-table-column>
                <el-table-column  label="时长" width="200">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
import {
getSearchAll,
} from '@/api/searchView'
import {
    getMusicUrl,
    getMusicMenu
} from '@/api/personalView'
export default {
    data(){
        return{
            playLists:[],
            keywords:'',
            playlistCount:0,
            isloading:false, //表格刷新
        }
    },
    created(){
        this.keywords = this.$route.params.keywords;
        this.getAllSongs()
    },
    methods:{
        async getAllSongs(){
            this.isloading = true
            let response = await getSearchAll(this.keywords)
            if(response.code == 200){
                const {songs, songCount} = response.result
                this.playLists = songs
                this.playlistCount = songCount
            }
            this.isloading = false
        },
        playMusic(row){
            this.getMusic(row.id);
            this.getMusicDetail(row.id);
        },
        async getMusic(id){
            let response = await getMusicUrl(id)
            if(response.code == 200) {
                const url = response.data[0].url
                console.log(url)
                this.$store.commit('NOW_MUSIC', url)
            }
        },
        async getMusicDetail(id){
            let response = await getMusicMenu(id)
            if(response.code == 200) {
                const menu = response.songs[0]
                console.log(menu)
                this.$store.commit('NOW_MUSICMENU', menu)
            }
        }
    },
    watch:{
        $route: function (to, from){
            if(to.params.keywords == undefined) return
            this.keywords = this.$route.params.keywords;
            this.getAllSongs()
        }
    }
}
</script>

<style lang="scss" scoped>
.form-search{
    width: 1200px;
    // height: 640px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    .search-header{
        font-size:18px;
        margin-top:10px;
        .header-font{
            color:skyblue;
        }
    }
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