<template>
  <div class="leader-board">
    <back-header title="排行榜"/>
    <scroll class="content">
      <spin :spining="!(moreList.length>0)">
        <section class="left-right-padding-box">
          <official-list :official-list="officialList"/>
          <top-list :data="recommendList" title="推荐榜"></top-list>
          <top-list :data="internationalList" title="全球榜"></top-list>
          <top-list :data="moreList" title="更多榜单"></top-list>
        </section>
      </spin>
    </scroll>
  </div>
</template>

<script>
  import BackHeader from '@/components/BackHeader'
  import OfficialList from './childComps/OfficialList'
  import TopList from './childComps/TopList'
  import Scroll from '@/components/common/scroll/Scroll'
  import { getToplistDetail } from "@/api/LeaderBoard";

  export default {
    name: 'LeaderBoard',
    components: {
      BackHeader,
      OfficialList,
      TopList,
      Scroll
    },
    data() {
      return {
        officialList: [],
        recommendList: [],
        internationalList: [],
        moreList: []
      }
    },
    mounted() {
      getToplistDetail()
        .then(res => {
          const { list } = res
          // console.log(res)
          this.officialList = list.slice(0, 4)
          this.recommendList = list.slice(4, 10)
          this.internationalList = list.slice(10, 16)
          this.moreList = list.slice(16)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
</script>

<style lang='less' scoped>
  .leader-board {
    height: 100vh;
    position: relative;
  }
  .content {
    overflow: hidden;

    position: absolute;
    top: 0;
    bottom: 0;  
    left: 0;
    right: 0;
  }
</style>
