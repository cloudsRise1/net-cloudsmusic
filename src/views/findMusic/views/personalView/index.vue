<template>
  <div class="view-personal">
    <swiperView />
    <listView />
    <onlyView />
    <latestView />
  </div>
</template>

<script>
import swiperView from './views/swiperView'
import listView from './views/listView'
import onlyView from './views/onlyView'
import latestView from './views/latestView'
export default {
  components:{
    swiperView,
    listView,
    onlyView,
    latestView
  }
}
</script>

<style lang="scss" scoped>
.view-personal{
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: center;
  width:1200px;
}

</style>