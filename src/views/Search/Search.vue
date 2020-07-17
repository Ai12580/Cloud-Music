<template>
  <div class="search-box left-right-padding-box" ref="searchBox">
    <back-header color="red" :input='true' :doAfterUserEnter="startSearch"></back-header>
    <scroll class="content">
      <search-history v-if="!showResultPageFlag" :doAfterUserClick='startSearch' :list="history" title="历史记录" class="history-search"></search-history>
      <search-list v-if="!showResultPageFlag" :doAfterUserClick='startSearch' :list="hots" title="热搜榜"></search-list>
      <search-result-list v-else :tracks="songList" class="search-result-list"></search-result-list>
    </scroll>
  </div>
</template>

<script>
  import BackHeader from '@/components/BackHeader'
  import SearchList from './childComps/SearchList'
  import SearchHistory from './childComps/SearchHistory'
  import SearchResultList from './childComps/SearchResultList'
  import Scroll from '@/components/common/scroll/Scroll'
  import { getHotSearch } from "@/api/Search";
  import { getSearchResult } from "@/api/SearchResult";

  export default {
    name: 'Search',
    components: {
      BackHeader,
      SearchList,
      SearchResultList,
      SearchHistory,
      Scroll
    },
    data() {
      return {
        hots: [],
        showResultPageFlag: false,
        history: [],
        songList: [],
      }
    },
    methods: {
      getData() {
        getHotSearch().then(res => {
          this.hots = res.data
          console.log(this.hots)
        })
      },
      switchToResult() {
        this.showResultPageFlag = true
      },
      startSearch(theValueToSearch) {
        // debugger;
        this.switchToResult()
        this.getSearchResultData(theValueToSearch)
        // push一个对象进history数组的原因是，为了使得history和hots的格式一致，这样这两部分才能共用一个SearchList组件
        this.history.push({ first: theValueToSearch })
      },
      async getSearchResultData(theValueToSearch) {
        const data = await getSearchResult(theValueToSearch)
        this.songList = data.result.songs
      },
    },
    created() {
      this.getData()
    },
    // 该局部路由守卫的作用是让每次跳转进搜索界面时，都显示热门搜索和历史记录，而不是搜索结果
    beforeRouteLeave(to, from, next) {
      this.showResultPageFlag = false
      next()
    },
  }
</script>

<style lang='less' scoped>
  .search-box {
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: white;
    .history-search {
      margin-top: 0.44rem;
    }
    .search-result-list {
      padding-top: 0.44rem;
    }
  }
  .content {
    overflow: hidden;

    position: absolute;
    top: 0.3rem;
    bottom: 0;  
    left: 0;
    right: 0;
  }
</style>
