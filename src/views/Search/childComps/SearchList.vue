<template>
  <section class="container" @click='handleClick'>
    <h2 class="title">{{title}}</h2>
    <search-list-item v-for="(item, index) in list" :key="index" class="search-list-item">
      <div slot="left">{{index + 1}}</div>
      <div slot="center" class="center">
        <p>{{item.searchWord}}</p>
        <p>{{item.content}}</p>
      </div>
      <div slot="right">{{item.score}}</div>
    </search-list-item>
  </section>
</template>

<script>
  import SearchListItem from './SearchListItem'

  export default {
    name: 'SearchList',
    components: {
      SearchListItem
    },
    props: ['list', 'title', 'doAfterUserClick'],
    methods: {
      handleClick(e) {
        const src = e.target;
        if (src.className === 'item') {
          this.doAfterUserClick(src.innerText)
        }
      },
    },
  }
</script>

<style lang='less' scoped>
  .container {
    padding: 0.2rem 0;
    .title {
      padding: 0.1rem 0.1rem;
      font-size: .18rem;
    }
  }
  .center {
    text-align: left;
  }
  .search-list-item {
    font-size: .14rem;
  }
</style>
