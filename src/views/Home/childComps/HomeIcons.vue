<template>
  <div class="container border-bottom">
    <icon
      v-for="(item, index) in homeIcons"
      :icons="item"
      :bgcolor="true"
      :key="index"
      @goPage="goPage(item.linkTo)"
    >
      <span class="today" v-if="item.text === '每日推荐'">{{today}}</span>
    </icon>
  </div>
</template>

<script>
  import { homeIcons } from '@/api/getInfos/getData'
  import Icon from '@/components/common/publicicon/Icon'

  export default {
    name: 'HomeIcons',
    components: {
      Icon
    },
    data () {
      return {
        homeIcons
      }
    },
    computed: {
      today: function () {
        return new Date().getDate()
      }
    },
    mounted () {
      this.iniData()
    },
    methods: {
      iniData () {
        this.homeIcons = homeIcons()
      },
      goPage (link) {
          this.$router.push(link)
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../../assets/less/global.less";


  .container {
    .flex-around();
    width: 100%;
    height: 1.2rem;
    align-items: center;
    padding: 0.2rem 0 0.2rem;
    .today {
      position: absolute;
      top: .05rem;
      left: 50%;
      transform: translateX(-50%);
      font-size: .12rem;
    }
  }
</style>