<template>
  <div class="list-item">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
	export default {
		name: 'SearchListItem'
	}
</script>

<style lang='less' scoped>
  .list-item {
    display: flex;
    height: 44px;
    text-align: center;
  }
  .left,.right {
    width: 60px;
    line-height: 44px;
  }
  .center {
    flex: 1;
  }
</style>
