<template>
  <swiper>
    <swiper-item v-for="(item,index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.imageUrl" alt="" >
      </a>
    </swiper-item>
  </swiper> 
</template>

<script>
  import {Swiper,SwiperItem} from '@/components/common/swiper'
  import { getBanner } from "@/api/Home";

  export default {
    name: "HomeSwiper",
    components: {
      Swiper,
      SwiperItem
    },
    data() {
      return {
        banners: []
      }
    },
    methods: {
      getData() {
        getBanner().then(res => {
          this.banners = res.banners
        })
      }
    },
    mounted() {
      this.getData()
    }
  }
</script>

<style lang="less" scoped>
</style>
