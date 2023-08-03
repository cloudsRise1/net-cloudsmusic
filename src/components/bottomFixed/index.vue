<template>
  <div class="container-bottom">
    <div class="bottom-footer">
      <div class="footer-scroll">
        <el-slider
        class="scroll-slider"
        v-model="musicDuration"
        :max="totalDuration"
        @change="musicDurationChange"
        :show-tooltip="false"
        :disabled="isUrl"
        ></el-slider>
      </div>
      <div class="footer-content">
        <div class="content-left">
          <div class="left-singimg">
            <a href="javascript:void(0)">
              <img :src="getNowMusicMenu.al.picUrl" :style="{width:'60px',height:'100%'}" alt="404">
            </a>
          </div>
          <div class="left-sing">
            <div class="sing-title">
              <a
                href="#"
              >{{getNowMusicMenu.ar[0].name}} - {{getNowMusicMenu.name || getNowMusicMenu.al.name}}</a>
            </div>
            <div class="sing-time">
              <span>{{musicDuration | showTime}}</span>/
              <span>{{getTime}}</span>
            </div>
          </div>
          <div class="icon-start">
            <span style="cursor: pointer;">
              <i class="el-icon-star-off" v-show="true" ></i>
              <i class="el-icon-star-on" v-show="false"></i>
            </span>
          </div>
          <div class="icon-download">
            <span style="cursor: pointer;">
              <i class="el-icon-download"></i>
            </span>
          </div>
          <div class="icon-chat">
            <span style="cursor: pointer;">
              <i class="el-icon-chat-dot-square"></i>
            </span>
          </div>
          <div class="icon-outline">
            <span style="cursor: pointer;">
              <i class="el-icon-more-outline"></i>
            </span>
          </div>
        </div>
        <div class="content-play">
          <div class="play-pre" @click="preMusic">
            <span style="cursor: pointer;">
              <i class="el-icon-caret-left"></i>
            </span>
          </div>
          <div class="play-start" @click="playMusic">
            <span style="cursor: pointer;">
              <i class="el-icon-video-pause" v-show="isplay"></i>
              <i class="el-icon-video-play" v-show="!isplay"></i>
            </span>
          </div>
          <div class="play-next" @click="nextMusic">
            <span style="cursor: pointer;">
              <i class="el-icon-caret-right"></i>
            </span>
          </div>
        </div>
        <div class="content-more">
          <div style="marginRight:30px" class="more-box">
            <a href="#">
              <i class="el-icon-mic"></i>
            </a>
          </div>
          <el-button type="primary" class="more-btn">
            倍速
            <i class="el-icon-arrow-up el-icon--right"></i>
          </el-button>
          <el-button type="primary" class="more-btn">
            标准
            <i class="el-icon-arrow-up el-icon--right"></i>
          </el-button>
          <div class="more-data">
            <a href="#">
              <i class="el-icon-s-data"></i>
            </a>
          </div>
          <div class="more-sort">
            <a href="#">
              <i class="el-icon-sort"></i>
            </a>
          </div>
          <div class="more-notification">
            <a href="#">
              <i class="el-icon-close-notification"></i>
            </a>
          </div>
          <div class="more-unfold"> 
            <a href="#">
              <i class="el-icon-s-unfold"></i>
            </a>
            
          </div>
        </div>
        <audio :src="getNowMusic" autoplay class="playMusicAudio" ref="audio"></audio>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import {
  timeFormat,
  songTimeFormat
} from '@/utils/day'
import {
  getMusicUrl,
  getMusicMenu
} from '@/api/personalView'

export default {
  data(){
    return{
      isplay: false, //播放状态
      musicDuration: 0, //音乐当前播放时间
      totalDuration: 100, //总时长 默认先给个100
      isUrl: true, //设置无歌曲时进度条不可拖动
      value: 100, //音量
      debace: true, //简单防抖
      // 展示右边的歌单对话框
    }
  },
  computed:{
    ...mapGetters([
      "getNowMusic",
      "getNowMusicMenu",
      "getMusicListIds",
      "getMusicCount",
      "getDuration",
    ]),
    getTime(){
      return timeFormat(this.getNowMusicMenu.dt);
    }
  },
  methods:{
    // 下一首音乐
    nextMusic() {
      //判断播放歌单是否有歌
      if (this.getMusicListIds.length === 0) return false;
      // vuex中的数量增加
      this.$store.commit('ADD_COUNT');
      //获取地址和信息
      this.getMusicUrl(this.getMusicListIds[this.getMusicCount]);
      this.getMusicMenu(this.getMusicListIds[this.getMusicCount]);
      return false;
    },
    preMusic() {
      if (this.getMusicListIds.length === 0) return;
      this.$store.commit('SUB_COUNT');
      this.getMusicUrl(this.getMusicListIds[this.getMusicCount]);
      this.getMusicMenu(this.getMusicListIds[this.getMusicCount]);
      return false;
    },
    getMusicUrl(id) {
      getMusicUrl(id).then((res) => {
        this.$store.commit('NOW_MUSIC', res.data[0].url);
      });
    },
    getMusicMenu(id) {
      getMusicMenu(id).then((res) => {
        this.$store.commit('NOW_MUSICMENU', res.songs[0]);
      });
    },
    volumeChange() {
      let audio = this.$refs.audio;
      audio.volume = this.value / 100;
    },
    musicDurationChange() {
      let audio = this.$refs.audio;
      audio.currentTime = this.musicDuration;
      // this.$store.commit(SET_DURATION,audio.currentTime);
      // audio.currentTime = this.getDuration;
      audio.addEventListener("timeupdate", () => {
        //获取歌曲的总长度 example: 257s
        this.totalDuration = audio.duration;
        //获取歌曲时间
        this.musicDuration = audio.currentTime;
        this.$store.commit('SET_DURATION', audio.currentTime);
        // 当前歌曲播放完毕自动播放下一首
        if (audio.currentTime >= audio.duration) {
          if (this.getMusicListIds.length > 0) {
            if (this.debace) {
              this.debace = false;
              this.nextMusic();
              setTimeout((res) => {
                this.debace = true;
              }, 500);
            }
          }
          this.isplay = false;
          this.$store.commit('SET_PLAY', this.isplay);
        }
      });
      // if (this.isplay) return;
      this.isplay = true;
      this.$store.commit('SET_PLAY', this.isplay);
    },
    playMusic() {
      if (this.getNowMusic !== "") {
        if (!this.$refs.audio.paused) {
          this.$refs.audio.pause();
        } else {
          this.$refs.audio.play();
        }
        this.isplay = !this.isplay;
        this.$store.commit('SET_PLAY', this.isplay);
      }
      return false;
    },
  },
  filters: {
    showTime(value) {
      return songTimeFormat(value);
    },
  },
  deep:true,
  watch:{
    getNowMusic() {
      this.isplay = true;
      this.$store.commit('SET_PLAY', this.isplay);
      this.isUrl = false;

    },
    getMusicListIds() {
      this.$store.commit('CLEAR_COUNT');
      this.getMusicUrl(this.getMusicListIds[this.getMusicCount]);
      this.getMusicMenu(this.getMusicListIds[this.getMusicCount]);
    },
  },
  mounted(){
    this.musicDurationChange();
  }

}
</script>

<style lang="scss" scoped>
.container-bottom{
    display: flex;
    width: 1400px;
    height: 80px;
    background-color: rgba(		  224,255,255,0.9);
    .bottom-footer{
      display: flex;
      position: relative;
      // flex-direction: column;
      // align-items: center;
      width: 1400px;
      height: 80px;
      .footer-scroll{
        width: 98%;
        position: absolute;
        top: -22px;

      }
      .footer-content{
        display: flex;
        flex-direction:row;
        align-items: center;
        .content-left{
          display: flex;
          flex-direction:row;
          align-items: center;

          .left-singimg{
            margin-left:6px;
          }
          .left-sing{
            margin-left: 10px;
            .sing-title{
              color: rgb(187, 192, 195);
            }
            .sing-time{
              margin-top: 6px;
              color: rgb(187, 192, 195);
            }
          }
          .icon-start{
            font-size: 20px;
            margin-left:20px;
          }
          .icon-download{
            font-size: 20px;
            margin-left:20px;
          }
          .icon-chat{
            font-size: 20px;
            margin-left:20px;
          }
          .icon-outline{
            font-size: 20px;
            margin-left:20px;
          }
        }
        .content-play{
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-left: 240px;
          font-size: 40px;
          color: skyblue;
        }
        .content-more{
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-left: 240px; 
          .more-btn {
            padding: 0;
            width: 60px;
            height: 20px;
            background: none;
            color: #888;
            margin-right: 8px;
          }
          .more-data{
            margin-left:10px;
          }
          .more-sort{
            margin-left:10px;
          }
          .more-notification{
            margin-left:10px;
          }
          .more-unfold{
            margin-left:10px;
          }
        }
      }
    }



}

</style>