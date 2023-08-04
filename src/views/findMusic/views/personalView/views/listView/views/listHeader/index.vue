<template>
<div class="list-font">
    <div class="font-recomm">推荐歌单</div>
    <div class="font-more">
        <a href="#">
            更多 >
        </a>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.list-font{
    display: flex;
    // justify-content:space-between;
    flex-wrap: wrap;
    width: 900px;
    height: 30px;
    margin-bottom: 10px;
    border-bottom: 2px solid rgba(0, 0, 255, 0.2);;
    .font-recomm{
    // float:left;
    }
    .font-more{
    // float:right;
        margin-left: auto;
    }
}
</style>