<template>
  <div class="icon-list" :class="{width}" @click="linkTo">
    <div class="icon" :class="{bgcolor}">
      <i :class="icons.icon"></i>
      <slot></slot>
    </div>
    <span class="icon-text">{{icons.text}}</span>
  </div>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    icons: {
      type: [Object, Array]
    },
    width: {
      type: Boolean
    },
    bgcolor: {
      type: Boolean
    }
  },
  methods: {
    linkTo () {
      this.$emit('goPage')
    }
  }
}
</script>

<style lang='less' scoped>
// 这部分样式是对于 我的页面设置的
.width {
  min-width: 1.6rem;
  &:last-of-type > .icon {
    background: #ccc;
  }
}
.icon-list {
  // 每项 icon 样式
  height: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  color: #000;
  .bgcolor {
    background: linear-gradient(to right, #ff5a4c, #ff1d11);
  }
  .icon {
    width: 0.5rem;
    height: 0.5rem;
    line-height: 0.5rem;
    border-radius: 50%;
    text-align: center;
    position: relative;
    color: #fff;
    .find {
      font-size: 0.3rem;
    }
  }
  .icon-text {
    font-size: .16rem;
  }
}
</style>
