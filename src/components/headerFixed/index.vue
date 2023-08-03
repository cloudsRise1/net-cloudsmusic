<template>
<div class="container-header">
    <div class="header-login">
        <div class="login-icon">
            <a href="#">
                <img src="@/assets/img/user-header.png" :style="{width:'40px',height:'100%'}" alt="404">
            </a>
        </div>
        <el-button class="login-font" type="text" :style="{color:'#fff'}">登录</el-button>
    </div>

    <div class="header-history">
        <div class="history-goback">
            <a href="#">
                <i class="el-icon-arrow-left" :style="{color:'#fff'}"></i>
            </a>
        </div>
        <div class="history-reset">
            <a href="#">
                <i class="el-icon-refresh" :style="{color:'#fff'}"></i>
            </a>
        </div>
    </div>
    <div class="header-search">
        <el-input
        v-model="inputData"
        size="mini"
        class="serach-box"
        placeholder="请输入内容"
        suffix-icon="el-icon-search"
        clearable
        ></el-input>
        <div class="history-microphone">
            <a href="#">
                <i class="el-icon-microphone" :style="{color:'#fff'}"></i>
            </a>
        </div>
    </div>  
    <div class="header-multifunc">
        <el-button class="multifunc-old" type="text" :style="{color:'#fff'}">回到旧版</el-button>
        <div class="multifunc-platform">
            <a href="#">
                <i class="el-icon-s-platform" :style="{color:'#fff'}"></i>
            </a>
        </div>
        <div class="multifunc-mobilephone">
            <a href="#">
                <i class="el-icon-mobile-phone" :style="{color:'#fff'}"></i>
            </a>
        </div>
        <div class="multifunc-menu">
            <a href="#">
                <i class="el-icon-menu" :style="{color:'#fff'}"></i>
            </a>
        </div>
        <div class="multifunc-setting">
            <a href="#">
                <i class="el-icon-setting" :style="{color:'#fff'}"></i>
            </a>
        </div>
        <div class="multifunc-bell">
            <a href="#">
                <i class="el-icon-bell" :style="{color:'#fff'}"></i>
            </a>
        </div>
        <div class="multifunc-close">
            <a href="#">
                <i class="el-icon-close" :style="{color:'#fff'}"></i>
            </a>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            inputData :'',
        }
    }
}
</script>

<style lang="scss" scoped>
.container-header{
    display: flex;
    flex-direction:row;
    align-items: center;
    width: 1400px;
    height: 80px;
    background: #5292fe;
    .header-login{
        display: flex;
        flex-direction:row;
        margin-left:20px;
        .login-font{
            margin-left:4px;
        }
    }
    .header-history{
        display: flex;
        margin-left:80px;
        .history-goback{
            font-size:20px;
        }
        .history-reset{
            font-size:20px;
            margin-left: 10px;
        }
    }
    .header-search{
        display: flex;
        margin-left:10px;
        align-items: center;
        font-size:20px;
        .serach-box{

        }
        .history-microphone{
            margin-left:4px;
        }
    }
    .header-multifunc{
        display: flex;
        align-items: center;
        margin-left:500px;
        font-size:20px;
        .multifunc-platform{
            margin-left:10px;
        }
        .multifunc-mobilephone{
            margin-left:6px;
        }
        .multifunc-menu{
            margin-left:6px;
        }
        .multifunc-setting{
            margin-left:6px;
        }
        .multifunc-bell{
            margin-left:6px;
        }
        .multifunc-close{
            font-size:30px;
            margin-left:10px;
        }
    }
}

</style>
