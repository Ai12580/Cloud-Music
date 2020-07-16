<template>
  <div class="home">
    <HomeSwiper/>
    <FourCircles/>
    <RecommendSongList/>
  </div>
</template>

<script>
  import HomeSwiper from './childComps/HomeSwiper';
  import FourCircles from './childComps/FourCircles';
  import RecommendSongList from './childComps/RecommendSongList';

  export default {
    name: 'Home',
    components: {
      HomeSwiper,
      FourCircles,
      RecommendSongList,
    },
  };
</script>

<style lang="less" scoped>

</style>
