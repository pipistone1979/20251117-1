import { defineStore } from 'pinia'
import axios from 'axios'

export const useSeckillStore = defineStore('seckill', {
  state: () => ({
    items: [],
    endTime: 0
  }),
  actions: {
    async fetch() {
      const { data } = await axios.get('/api/seckill')
      this.items = data.items
      this.endTime = data.endTime
    }
  }
})