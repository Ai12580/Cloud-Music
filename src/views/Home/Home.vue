<template>
  <div class="home">
    <scroll class="content">
      <HomeSwiper/>
      <FourCircles/>
      <RecommendSongList/>
    </scroll>
  </div>
</template>

<script>
  import HomeSwiper from './childComps/HomeSwiper'
  import FourCircles from './childComps/FourCircles'
  import RecommendSongList from './childComps/RecommendSongList'
  import Scroll from '@/components/common/scroll/Scroll'

  export default {
    name: 'Home',
    components: {
      HomeSwiper,
      FourCircles,
      RecommendSongList,
      Scroll
    },
  }
</script>

<style lang="less" scoped>
  .home {
    height: 100vh;
    position: relative;
  }
  .content {
    overflow: hidden;

    position: absolute;
    top: 0;
    bottom: 45px;  
    left: 0;
    right: 0;
  }
</style>
