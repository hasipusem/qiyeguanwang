export interface OperatingModule {
  code: string
  title: string
  en: string
  desc: string
  capabilities: string[]
  outcome: string
}

export const operatingStages = [
  {
    code: '01',
    title: '洞察机会',
    en: 'DISCOVER',
    desc: '从全球平台、趋势与消费者反馈中识别真实需求。',
    items: ['全球市场研究', 'AI 数据决策', '消费者洞察']
  },
  {
    code: '02',
    title: '创造产品',
    en: 'CREATE',
    desc: '把市场机会转化为可制造、可认证、可盈利的产品。',
    items: ['产品定义', '设计打样', '测试与合规']
  },
  {
    code: '03',
    title: '规模经营',
    en: 'SCALE',
    desc: '依托品牌、渠道、仓储和营销完成全球商业化。',
    items: ['品牌孵化', '多平台运营', '全球履约']
  },
  {
    code: '04',
    title: '持续增长',
    en: 'IMPROVE',
    desc: '以经营数据和用户反馈反向推动产品与供应链升级。',
    items: ['BI 经营分析', '库存优化', '产品迭代']
  }
]

export const operatingModules: OperatingModule[] = [
  {
    code: '01',
    title: '全球市场研究',
    en: 'Global Market Intelligence',
    desc: '研究北美、欧洲、日本、澳洲及中东市场，持续跟踪消费趋势、竞争格局与用户行为。',
    capabilities: ['市场容量', '价格带', '竞争强度', '用户痛点'],
    outcome: '输出品类机会、竞品分析与产品方向'
  },
  {
    code: '02',
    title: 'AI 数据决策',
    en: 'AI Decision System',
    desc: '结合主流大模型与全球平台数据，放大团队经验，提升选品、投放和库存决策效率。',
    capabilities: ['销量预测', '利润测算', '广告优化', '智能补货'],
    outcome: '把经验判断升级为可验证的数据决策'
  },
  {
    code: '03',
    title: '产品创新开发',
    en: 'Product Innovation',
    desc: '建立从需求分析、功能与外观设计，到打样、试销、质量检测和持续迭代的标准流程。',
    capabilities: ['产品定义', '设计打样', '试运营', 'QC 检测'],
    outcome: '降低新品试错成本，提高上市成功率'
  },
  {
    code: '04',
    title: '全球品牌孵化',
    en: 'Brand Incubation',
    desc: '坚持“一个品牌，一个生活场景”，围绕镜类、家具和卫浴构建中高端家居品牌矩阵。',
    capabilities: ['品牌定位', '视觉体系', '内容资产', '消费者运营'],
    outcome: '让制造能力沉淀为可持续品牌资产'
  },
  {
    code: '05',
    title: '全球产品合规',
    en: 'Compliance System',
    desc: '围绕目标国家与销售渠道规划认证、商标、专利及知识产权保护。',
    capabilities: ['CE / UKCA', 'UL / ETL', 'FCC / PSE', 'RoHS / REACH'],
    outcome: '为产品长期、安全进入全球市场建立底座'
  },
  {
    code: '06',
    title: '供应链协同',
    en: 'Supply Chain System',
    desc: '通过长期伙伴机制和 ERP 协同采购、生产、库存、订单与补货计划。',
    capabilities: ['生产协同', '品质管理', '订单管理', '供应计划'],
    outcome: '让研发、制造和销售形成一体化运营'
  },
  {
    code: '07',
    title: '全球仓储物流',
    en: 'Global Fulfillment',
    desc: '依托覆盖 20 多个国家和地区的海外仓合作网络，提供本地化仓配和售后处理。',
    capabilities: ['国际运输', '海外仓储', '尾程配送', '退换维修'],
    outcome: '提升大件家居履约效率与消费者体验'
  },
  {
    code: '08',
    title: '全球平台运营',
    en: 'Marketplace Operation',
    desc: '面向不同平台建立专人、专岗、专业团队，实现多国家、多平台精细化经营。',
    capabilities: ['平台策略', 'Listing 本土化', '销售运营', '账号健康'],
    outcome: '降低单一平台依赖，构建全渠道增长'
  },
  {
    code: '09',
    title: '全球广告营销',
    en: 'Global Marketing',
    desc: '以站内精准营销和站外品牌传播双轮驱动，持续优化曝光、转化与投资回报。',
    capabilities: ['PPC / DSP', 'Google / Meta', '内容社媒', '达人与联盟'],
    outcome: '兼顾短期销售效率与长期品牌影响力'
  },
  {
    code: '10',
    title: '数字化运营',
    en: 'Digital Operation',
    desc: '打通业务流、物流、资金流和数据流，为管理层提供统一经营视图。',
    capabilities: ['ERP 进销存', 'BI 分析', '业财一体化', '移动经营看板'],
    outcome: '让全球业务可视、可控、可复盘'
  },
  {
    code: '11',
    title: '全球专业团队',
    en: 'Global Operation Team',
    desc: '配置产品、广告、视觉、客服、数据、法务与认证等专业职能，支持本土化运营。',
    capabilities: ['本土化内容', 'AI 视觉', '全球客服', '法务认证'],
    outcome: '工厂无需从零搭建庞大的海外运营团队'
  },
  {
    code: '12',
    title: '持续迭代',
    en: 'Continuous Improvement',
    desc: '持续收集市场、消费者、广告、产品评价与供应链表现，推动经营体系不断升级。',
    capabilities: ['评价分析', '退货归因', '广告复盘', '产品升级'],
    outcome: '让每个产品在经营中持续成长'
  }
]

export const intelligenceSources = [
  'Amazon / Wayfair 销售数据',
  'Google Trends 趋势数据',
  'TikTok 与社交媒体趋势',
  '消费者评论与问答',
  '产品退货原因',
  '竞品价格与流量变化'
]

export const aiDecisionOutputs = [
  '市场容量与销量预测',
  '消费者画像与痛点挖掘',
  '产品生命周期判断',
  '单品利润与费用测算',
  '广告预算与投放优化',
  '智能补货与库存预警'
]

export const productDevelopmentStages = [
  {
    title: '机会定义',
    items: ['市场数据研究', '消费者需求分析', '竞品研究']
  },
  {
    title: '方案开发',
    items: ['功能与外观设计', '供应商打样']
  },
  {
    title: '市场验证',
    items: ['试运营测试', '产品优化']
  },
  {
    title: '质量放行',
    items: ['QC 质量检测', '小批量试产']
  },
  {
    title: '上市增长',
    items: ['正式上市', '持续产品迭代']
  }
]

export const partnerAccessSteps = [
  {
    code: '01',
    title: '能力与数据对齐',
    desc: '梳理工厂品类、研发、产能、质量、成本与出口能力，建立合作基线。'
  },
  {
    code: '02',
    title: '市场机会评估',
    desc: '以全球数据验证目标市场、价格带、竞争强度、利润空间和合规门槛。'
  },
  {
    code: '03',
    title: '联合开发上市',
    desc: '双方共同完成产品定义、打样测试、品牌包装、认证与渠道启动。'
  },
  {
    code: '04',
    title: '月度经营迭代',
    desc: '围绕销售、广告、库存、评价和利润进行公开复盘，持续优化经营。'
  }
]

export const partnerOutcomes = [
  '更准确的产品开发方向',
  '更低的海外团队建设成本',
  '更完整的全球渠道与履约能力',
  '更透明的经营数据和利润核算',
  '可持续沉淀的品牌与知识产权资产'
]
