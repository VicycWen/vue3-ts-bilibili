<template>
  <div>
    <van-tabs v-model:active="active">
      <van-tab title="标签 1">内容 1</van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
      <van-tab title="标签 11">内容 11</van-tab>
      <van-tab title="标签 22">内容 22</van-tab>
      <van-tab title="标签 33">内容 33</van-tab>
      <van-tab title="标签 44">内容 44</van-tab>
    </van-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    return { active: ref(0) }
  },
})
</script>

<style scoped></style>
