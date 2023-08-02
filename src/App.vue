<template>
<div id="app">
    <headerFixed />
    <mainFrame />
    <bottomFixed />
</div>
</template>

<script>
import headerFixed from '@/components/headerFixed'
import mainFrame from '@/components/mainFrame'
import bottomFixed from '@/components/bottomFixed'

export default {
    components:{
        headerFixed,
        bottomFixed,
        mainFrame
    }
}
</script>

<style lang="scss" scoped>
#app{
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    width:1400px;
    height: 800px;
    background: skyblue;
    margin: 0 auto;
}

</style>
