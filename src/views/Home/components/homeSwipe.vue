<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in imgList" :key="item.imgSrc">
        <img :src="item.imgSrc" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import axios from 'axios'

interface ISwiper {
  imgSrc: string
  link: string
}

export default defineComponent({
  setup() {
    const imgList = ref<ISwiper[]>()
    axios({
      url: '/swiperList',
      method: 'get',
    }).then((res) => {
      console.log(res)
      imgList.value = res.data.result
    })
    return { imgList }
  },
})
</script>

<style lang="less" scoped>
.my-swipe {
    img {
        width: 100%;
    }
}
</style>
