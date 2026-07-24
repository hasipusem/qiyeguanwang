export interface Industry {
  slug: string
  name: string
  en: string
  products: string[]
  value: string
  fit: string
  opportunity: string
  capabilities: string[]
  cooperation: string[]
}

export const industries: Industry[] = [
  {
    slug: 'mirror',
    name: '镜类制造企业',
    en: 'MIRROR & SMART MIRROR',
    products: ['LED 镜', '浴室镜', '智能镜', '全身镜'],
    value: '依托成熟镜类品牌、用户数据与全球渠道，推动功能创新、设计升级和品牌化经营。',
    fit: '具备玻璃深加工、LED、电控、结构件或智能模块协同能力的制造企业',
    opportunity: '从单一照明镜向智能交互、健康监测与完整浴室场景延伸。',
    capabilities: ['光学与结构研发', '电气安全控制', '防雾与防水工艺', '稳定规模交付'],
    cooperation: ['现有优势产品全球化', '联合开发智能新品', '镜类场景品牌共建']
  },
  {
    slug: 'furniture',
    name: '家具制造企业',
    en: 'INDOOR FURNITURE',
    products: ['客厅家具', '卧室家具', '收纳家具', '办公家具'],
    value: '围绕欧美家庭生活场景，联合打造设计型、模块化、可高效交付的中高端家具产品。',
    fit: '具备大件家居研发、包装测试、结构优化与稳定交付能力的企业',
    opportunity: '以用户空间需求为起点，建立从单品、套系到生活空间解决方案的产品矩阵。',
    capabilities: ['原创设计打样', '结构与材料优化', 'ISTA 包装测试', '大件供应链管理'],
    cooperation: ['爆款单品联合开发', '空间套系产品共创', '欧美渠道品牌运营']
  },
  {
    slug: 'bathroom',
    name: '卫浴制造企业',
    en: 'BATHROOM SPACE',
    products: ['浴室柜', '淋浴房', '卫浴收纳', '智能卫浴'],
    value: '整合智能镜、卫浴家具与空间产品，构建满足欧美审美、法规和使用习惯的浴室方案。',
    fit: '熟悉欧美标准，具备防水、耐久、环保和产品认证经验的制造企业',
    opportunity: '将分散的卫浴产品升级为风格统一、功能协同的完整空间品牌。',
    capabilities: ['卫浴空间研发', '环保材料应用', '认证合规经验', '多品类协同制造'],
    cooperation: ['镜柜产品组合', '浴室空间套系', '智能卫浴联合创新']
  },
  {
    slug: 'lifestyle',
    name: '家居生活方式企业',
    en: 'HOME & LIFESTYLE',
    products: ['家居装饰', '功能家居', '户外生活', '厨房空间'],
    value: '以全球消费者洞察筛选高潜力场景，将创新制造能力转化为可持续的全球品牌资产。',
    fit: '具备原创设计、差异化工艺与持续产品迭代能力的制造企业',
    opportunity: '围绕生活方式与细分场景，发现传统外贸之外的品牌增量。',
    capabilities: ['消费场景创新', '快速打样验证', '差异化制造', '柔性供应能力'],
    cooperation: ['新场景机会验证', '小批量市场测试', '细分品类品牌孵化']
  }
]

export const industryEvaluation = [
  { title: '制造基础', desc: '真实工厂、核心工艺、稳定产能与透明的供应链管理。' },
  { title: '研发能力', desc: '能够参与需求定义、快速打样、测试优化与持续迭代。' },
  { title: '质量合规', desc: '建立质量体系，并具备面向欧美市场的认证与合规意识。' },
  { title: '交付能力', desc: '重视包装、交期、售后问题闭环和长期供应保障。' },
  { title: '战略意愿', desc: '认同品牌共建、利润共享和长期投入，而非短期订单思维。' }
]

export const categoryRoadmap = [
  { period: '优势基座', title: '镜类空间', desc: '持续强化镜类产品创新、品牌心智与全球渠道优势。' },
  { period: '重点增长', title: '室内家具', desc: '围绕客厅、卧室和收纳场景建设产品矩阵。' },
  { period: '场景协同', title: '卫浴空间', desc: '连接镜类、浴室柜与智能卫浴，形成空间解决方案。' },
  { period: '战略拓展', title: '户外生活', desc: '通过市场数据验证高潜力户外生活细分机会。' },
  { period: '长期布局', title: '厨房空间', desc: '逐步构建覆盖全球家庭核心空间的品牌版图。' }
]
