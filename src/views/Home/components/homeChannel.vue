<template>
  <div>
    <van-tabs v-model:active="active">
      <van-tab v-for="item in list" :key="item.id" :title="item.text"></van-tab>
    </van-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import axios from 'axios'

interface INavItem {
  id: string
  text: string
}

export default defineComponent({
  setup() {
    const list = ref<INavItem[]>([])
    axios({
      url: '/navList',
      method: 'get',
    }).then((res) => {
      console.log(res.data)
      list.value = res.data.result
    })

    return { active: ref(0), list }
  },
})
</script>

<style scoped></style>
