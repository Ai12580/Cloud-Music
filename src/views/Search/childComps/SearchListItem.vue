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
    height: .44rem;
    text-align: center;
  }
  .left,.right {
    width: .62rem;
    line-height: .44rem;
  }
  .center {
    flex: 1;
  }
</style>
