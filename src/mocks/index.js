import Mock from 'mockjs'

const Random = Mock.Random

Mock.setup({ timeout: '300-600' })

Mock.mock('/api/banners', 'get', () => {
  return Array.from({ length: 5 }).map((_, i) => ({
    title: `banner-${i+1}`,
    image: Random.image('1200x360', Random.color(), 'JD')
  }))
})

Mock.mock('/api/categories', 'get', () => {
  return Array.from({ length: 12 }).map((_, i) => ({
    id: i+1,
    name: Random.ctitle(2,4),
    children: Array.from({ length: Random.integer(6, 10) }).map((__, j) => ({
      id: `${i+1}-${j+1}`,
      name: Random.ctitle(3,6)
    }))
  }))
})

Mock.mock('/api/products', 'get', () => {
  return Array.from({ length: 20 }).map((_, i) => ({
    id: i+1,
    name: Random.ctitle(8, 16),
    image: Random.image('300x180', Random.color(), '商品'),
    price: Random.float(10, 9999, 0, 2),
    sales: Random.integer(10, 50000)
  }))
})

Mock.mock('/api/seckill', 'get', () => {
  const items = Array.from({ length: 6 }).map((_, i) => ({
    id: i+1,
    name: Random.ctitle(8, 16),
    image: Random.image('300x180', Random.color(), '秒杀'),
    price: Random.float(10, 999, 0, 2),
    sales: Random.integer(10, 5000)
  }))
  const end = Date.now() + 2 * 60 * 60 * 1000
  return { items, endTime: end }
})

Mock.mock(/\/api\/search\?/, 'get', (opts) => {
  const url = new URL(opts.url, 'http://localhost')
  const q = url.searchParams.get('q') || ''
  return q
    ? Array.from({ length: 6 }).map(() => Random.ctitle(4, 8))
    : []
})