<template>
  <div class="container-main">
    <siderBar />
    <mainView />
  </div>
</template>

<script>
import siderBar from './components/siderBar'
import mainView from './components/mainView'
export default {
  components:{
    siderBar,mainView
  }
}
</script>

<style lang="scss" scoped>
.container-main{
    display: flex;
    flex-direction: row;
    width: 1400px;
    height: 640px;
    background-color: #fff;
}

</style>