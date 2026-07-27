export const platforms = ['Amazon','Walmart','Wayfair','Home Depot',"Lowe's",'Target','OTTO','Kaufland','TikTok Shop','Shopify']
export const markets = [
  { name:'北美', x:'18%', y:'39%' },{ name:'欧洲', x:'50%', y:'29%' },{ name:'日本', x:'82%', y:'42%' },
  { name:'澳洲', x:'84%', y:'74%' },{ name:'新西兰', x:'91%', y:'82%' }
]

export const marketplaceGroups = [
  {
    market: '北美市场',
    en: 'NORTH AMERICA',
    desc: '覆盖综合电商、家居垂直渠道与大型家装零售网络。',
    platforms: [
      { name: 'Amazon', logo: '/images/platforms/amazon.png', role: '综合电商与新品验证' },
      { name: 'Walmart', logo: '/images/platforms/walmart.png', role: '大众零售与规模销售' },
      { name: 'Wayfair', logo: '/images/platforms/wayfair.png', role: '专业家居垂直渠道' },
      { name: 'Home Depot', logo: '/images/platforms/homedepot.png', role: '家装与卫浴核心渠道' },
      { name: `Lowe's`, logo: '/images/platforms/lowes.png', role: '家居改善零售渠道' },
      { name: 'Target', logo: '/images/platforms/target.svg', role: '品质生活消费渠道' },
      { name: 'TikTok Shop', logo: '/images/platforms/tiktok.svg', role: '内容电商与社交增长渠道' },
      { name: 'Shopify', logo: '/images/platforms/shopify.svg', role: '品牌独立站与私域经营' }
    ]
  },
  {
    market: '欧洲市场',
    en: 'EUROPE',
    desc: '以德国、荷兰、波兰等成熟市场为支点，建立多国协同经营能力。',
    platforms: [
      { name: 'OTTO', logo: '/images/platforms/otto.svg', role: '德国综合电商渠道' },
      { name: 'Kaufland', logo: '/images/platforms/kaufland.svg', role: '欧洲多国零售平台' },
      { name: 'BOL', logo: '/images/platforms/bol.png', role: '荷兰与比利时市场' },
      { name: 'Allegro', logo: '/images/platforms/allegro.svg', role: '中东欧重点电商渠道' }
    ]
  }
]

export const countryMarkets = [
  { country: '美国', code: 'US', flag: '/images/flags/us.svg', region: '北美', focus: '家居、镜类、家具' },
  { country: '加拿大', code: 'CA', flag: '/images/flags/ca.svg', region: '北美', focus: '家居、卫浴空间' },
  { country: '英国', code: 'UK', flag: '/images/flags/gb.svg', region: '欧洲', focus: '镜类、家具' },
  { country: '德国', code: 'DE', flag: '/images/flags/de.svg', region: '欧洲', focus: '家居、卫浴、认证产品' },
  { country: '法国', code: 'FR', flag: '/images/flags/fr.svg', region: '欧洲', focus: '设计家居、生活方式' },
  { country: '意大利', code: 'IT', flag: '/images/flags/it.svg', region: '欧洲', focus: '设计型家居' },
  { country: '西班牙', code: 'ES', flag: '/images/flags/es.svg', region: '欧洲', focus: '家居、户外生活' },
  { country: '荷兰', code: 'NL', flag: '/images/flags/nl.svg', region: '欧洲', focus: '家居生活方式' },
  { country: '波兰', code: 'PL', flag: '/images/flags/pl.svg', region: '欧洲', focus: '家具、家居用品' },
  { country: '日本', code: 'JP', flag: '/images/flags/jp.svg', region: '亚洲', focus: '精细家居、收纳' },
  { country: '澳大利亚', code: 'AU', flag: '/images/flags/au.svg', region: '大洋洲', focus: '家居、户外生活' },
  { country: '新西兰', code: 'NZ', flag: '/images/flags/nz.svg', region: '大洋洲', focus: '家居、户外生活' }
]

export const channelCapabilities = [
  { title: '平台准入', desc: '根据产品、资质和目标市场，匹配适合的渠道与准入路径。' },
  { title: '内容本地化', desc: '完成多语言页面、视觉内容、卖点表达与品牌一致性管理。' },
  { title: '精细化运营', desc: '围绕流量、转化、评价、库存与利润进行全周期经营。' },
  { title: '广告增长', desc: '以站内广告为核心，结合站外内容建立长期品牌认知。' },
  { title: '合规管理', desc: '协同认证、知识产权、税务与平台规则，降低经营风险。' },
  { title: '数据迭代', desc: '将销售、评价和退货数据反馈到产品与供应链持续优化。' }
]

export const fulfillmentSteps = [
  '国内集货与质量复核',
  '国际头程运输',
  '海外仓入库',
  '多平台库存协同',
  '本地订单履约',
  '退换货与售后闭环'
]
