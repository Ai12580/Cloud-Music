<template>
  <div>
    <header class="mp-header">
      <button class="toggle-button btn-hamburger">
        <i class="iconfont icon-cebianlan"></i>
      </button>
      <router-link to="/home">推荐</router-link>
      <router-link to="/my">我的</router-link>
      <router-link to="/search">
        <i class="iconfont icon-sousuo"></i>
      </router-link>
    </header>
  </div>
</template>

<script>
  export default {
    name: 'Nav',
    methods: {

    }
  }
</script>

<style lang='less' scoped>
  i {
    display: block;
    font-size: 0.22rem;
    color: #333333;
    margin: .1rem;
  }

  // 播放器顶部导航栏
  .mp-header {
    display: flex;
    height: 0.44rem;
    justify-content: space-between; // 实现顶栏平均分布
    align-items: center; // 实现顶栏垂直居中
    background-color: #FFFFFF;
  }

  a {
    color: #808080;
    font-size: 0.15rem;
    &.router-link-active {
      text-decoration: none;
      font-size: .16rem;
      color: #333333;
    }
  }
</style>
