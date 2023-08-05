<template>
  <div class="list">
    <AppVideoItem
      v-for="item in list"
      :key="item.id"
      :video="item"
    ></AppVideoItem>
  </div>
</template>

<script setup lang="ts">
import AppVideoItem from '@/components/app-video-item.vue'
import axios from 'axios'
import { ref } from 'vue'

interface IVideoItem {
  id: number
  imgSrc: string
  desc: string
  playCount: string
  commentCount: string
  videoSrc: string
}

const list = ref<IVideoItem[]>([])
axios({
  url: '/videosList',
  method: 'get',
}).then(({ data }) => {
  console.log(data.result)
  list.value = data.result
})
</script>

<style lang="less" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  .v-card {
    display: block;
    width: 50%;
  }
}
</style>
