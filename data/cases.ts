export interface CaseStudy {
  id: string
  category: '镜类' | '室内家具' | '卫浴空间' | '户外家具'
  title: string
  location: string
  image: string
  imageAlt: string
  status: '业务实践' | '场景示意'
  challenge: string
  solution: string[]
  outcomes: string[]
  channels: string[]
}

export const caseCategories = ['全部', '镜类', '室内家具', '卫浴空间', '户外家具'] as const

export const caseStudies: CaseStudy[] = [
  {
    id: 'mirror-brand',
    category: '镜类',
    title: '广东镜类制造企业全球品牌升级',
    location: '广东 · 中国',
    image: '/images/cases/smart-mirror.webp',
    imageAlt: '智能 LED 浴室镜全球品牌合作场景',
    status: '业务实践',
    challenge: '企业以 OEM 与传统外贸为主，拥有稳定制造能力，但缺少面向消费者的产品定义、品牌运营和全球渠道能力。',
    solution: ['基于平台数据定义智能镜产品方向', '联合优化结构、照明与包装方案', '建立品牌内容与多平台运营体系'],
    outcomes: ['从单一供货转向品牌联营', '进入 Amazon、Wayfair、Walmart 等渠道', '形成消费者反馈驱动的产品迭代闭环'],
    channels: ['Amazon', 'Wayfair', 'Walmart']
  },
  {
    id: 'indoor-furniture',
    category: '室内家具',
    title: '大件家具企业北美市场联营路径',
    location: '佛山 · 中国',
    image: '/images/cases/indoor-furniture.webp',
    imageAlt: '模块化沙发与大件室内家具合作场景',
    status: '场景示意',
    challenge: '企业具备沙发与柜类规模制造能力，但大件物流、包装测试和海外库存策略限制了品牌化出海。',
    solution: ['围绕北美家庭场景规划模块化产品', '协同优化包装、结构与海外仓备货', '按渠道特点建立内容和价格体系'],
    outcomes: ['形成可复制的大件家居开发流程', '降低运输与履约不确定性', '逐步建设客厅空间产品矩阵'],
    channels: ['Wayfair', 'Walmart', 'Target']
  },
  {
    id: 'bathroom-space',
    category: '卫浴空间',
    title: '卫浴制造企业空间化品牌共创',
    location: '浙江 · 中国',
    image: '/images/cases/bathroom-space.webp',
    imageAlt: '浴室柜、智能镜与卫浴空间产品合作场景',
    status: '场景示意',
    challenge: '产品以单一浴室柜出口为主，缺少镜柜、收纳与智能功能协同，也缺少欧美合规和场景表达能力。',
    solution: ['组合浴室柜、智能镜与收纳产品', '同步规划认证、环保材料与质量标准', '以完整浴室场景建立品牌内容'],
    outcomes: ['由单品出口升级为空间方案', '提高多品类协同与连带销售能力', '建立合规驱动的长期产品路线'],
    channels: ['Home Depot', `Lowe's`, 'Amazon']
  },
  {
    id: 'outdoor-living',
    category: '户外家具',
    title: '户外家具企业多市场增长方案',
    location: '浙江 · 中国',
    image: '/images/cases/outdoor-living.webp',
    imageAlt: '模块化户外沙发与庭院家具全球合作场景',
    status: '场景示意',
    challenge: '企业在材料和生产端具备优势，但产品同质化明显，季节性库存与多国气候适配带来经营压力。',
    solution: ['根据气候、庭院尺寸与用户反馈细分产品', '优化防水、耐候、模块化和包装设计', '制定跨市场季节节奏与库存计划'],
    outcomes: ['建立差异化户外生活产品线', '提升多市场库存协同能力', '以场景内容沉淀长期品牌认知'],
    channels: ['Amazon', 'Kaufland', 'OTTO']
  }
]
