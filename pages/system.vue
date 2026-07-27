<script setup lang="ts">
import {
  aiDecisionOutputs,
  intelligenceSources,
  operatingModules,
  operatingStages,
  partnerAccessSteps,
  partnerOutcomes,
  productDevelopmentStages
} from '~/data/system'

usePageSeo(
  '全球运营体系 PGBOS',
  'PGBOS 行星全球品牌运营体系，以市场研究、AI 数据、产品创新、品牌孵化、全球渠道、供应链和数字化能力，帮助制造企业系统化建设全球品牌。',
  '全球品牌运营体系,PGBOS,制造企业出海,AI选品,全球品牌孵化,跨境供应链,全球渠道运营'
)

const certifications = ['CE', 'UL', 'ETL', 'FCC', 'PSE', 'GS', 'UKCA', 'RoHS', 'REACH', 'WEEE']
const platforms = ['Amazon', 'Walmart', 'Wayfair', 'Home Depot', `Lowe's`, 'Target', 'OTTO', 'Kaufland', 'BOL', 'Allegro', 'TikTok Shop', 'Shopify']
const brands = [
  ['HASIPU', '室内镜类生活品牌'],
  ['Winnice', '中高端室内家具品牌'],
  ['Vosuja', '卫浴空间品牌']
]
const improvementSignals = ['市场数据', '消费者反馈', '广告表现', '平台运营数据', '产品评价', '退货原因', '库存效率', '供应链表现']
</script>

<template>
  <main>
    <PageHero
      eyebrow="PLANET GLOBAL BRAND OPERATING SYSTEM"
      title="让全球品牌运营，成为一套可复制的系统"
      desc="PGBOS 不是单一的平台代运营，而是贯穿市场洞察、产品研发、品牌建设、全球销售、供应链协同及持续迭代的完整经营体系。"
      image="/images/overseas-warehouse.png"
      image-alt="全球海外仓与数字化履约网络"
      image-label="GLOBAL OPERATING INFRASTRUCTURE"
    />

    <section class="border-b border-slate-100 bg-white">
      <div class="container-shell grid grid-cols-2 divide-x divide-y divide-slate-100 sm:grid-cols-4 sm:divide-y-0">
        <div v-for="[value,label] in [['12','核心运营体系'],['20+','国家和地区仓储网络'],['10+','全球主流平台'],['AI + ERP','数字化决策底座']]" :key="label" class="px-4 py-7 text-center sm:py-9">
          <b class="block text-xl font-semibold text-[#0B1F33] sm:text-2xl">{{ value }}</b>
          <span class="mt-1 block text-[11px] text-slate-400 sm:text-xs">{{ label }}</span>
        </div>
      </div>
    </section>

    <section class="section-pad bg-[#F7F8FA]">
      <div class="container-shell">
        <div class="max-w-3xl">
          <div class="eyebrow">HOW PGBOS WORKS</div>
          <h2 class="section-title mt-5">从发现机会，到持续增长</h2>
          <p class="section-copy mt-6">
            制造企业不需要独自搭建海外团队。行星跨境将分散的市场、产品、渠道和供应链能力，组织成一条可执行、可衡量、可复盘的全球品牌增长链路。
          </p>
        </div>

        <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          <article v-for="(stage,index) in operatingStages" :key="stage.code" class="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 sm:p-7">
            <span class="text-xs text-[#A07D43]">{{ stage.code }} / {{ stage.en }}</span>
            <h3 class="mt-7 text-2xl font-semibold text-[#0B1F33]">{{ stage.title }}</h3>
            <p class="mt-3 min-h-14 text-sm leading-7 text-slate-500">{{ stage.desc }}</p>
            <div class="mt-6 space-y-2 border-t border-slate-100 pt-5">
              <div v-for="item in stage.items" :key="item" class="flex items-center gap-2 text-xs text-slate-500">
                <span class="h-1.5 w-1.5 rounded-full bg-[#C9A86A]"></span>{{ item }}
              </div>
            </div>
            <span v-if="index < operatingStages.length - 1" class="absolute -right-2 top-1/2 z-10 hidden h-7 w-7 place-items-center rounded-full bg-[#0B1F33] text-xs text-[#D7BC83] lg:grid">→</span>
          </article>
        </div>
      </div>
    </section>

    <section class="section-pad">
      <div class="container-shell">
        <div class="grid gap-6 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
          <div>
            <div class="eyebrow">12 OPERATING SYSTEMS</div>
            <h2 class="section-title mt-5">十二大能力协同运转</h2>
          </div>
          <p class="section-copy max-w-2xl">
            每个体系都不是孤立部门，而是围绕同一个品牌项目共享数据、共同决策。从消费者需求到工厂生产，再到全球交付与复购增长，形成完整闭环。
          </p>
        </div>

        <div class="mt-10 grid gap-4 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          <article v-for="module in operatingModules" :key="module.code" class="card group flex flex-col p-6 transition hover:-translate-y-1 hover:border-[#C9A86A]/50 sm:p-7">
            <div class="flex items-start justify-between gap-4">
              <span class="text-xs font-medium text-[#A07D43]">{{ module.code }}</span>
              <span class="text-[10px] tracking-wider text-slate-300">{{ module.en }}</span>
            </div>
            <h3 class="mt-6 text-xl font-semibold text-[#0B1F33]">{{ module.title }}</h3>
            <p class="mt-3 text-sm leading-7 text-slate-500">{{ module.desc }}</p>
            <div class="mt-5 flex flex-wrap gap-2">
              <span v-for="item in module.capabilities" :key="item" class="rounded-full bg-[#F4F5F7] px-3 py-1 text-[11px] text-slate-500">{{ item }}</span>
            </div>
            <div class="mt-6 border-t border-slate-100 pt-5 text-xs leading-6 text-[#8A6B38]">
              <span class="mr-1">输出：</span>{{ module.outcome }}
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section-pad overflow-hidden bg-[#0B1F33] text-white">
      <div class="container-shell">
        <div class="max-w-3xl">
          <div class="eyebrow text-[#C9A86A]">MARKET & AI DECISION ENGINE</div>
          <h2 class="mt-5 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">先理解市场，再决定生产什么</h2>
          <p class="mt-6 max-w-2xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
            全球品牌的第一步不是生产，而是理解市场。PGBOS 将全球平台数据、趋势数据和消费者反馈，转化为产品立项与经营决策。
          </p>
        </div>

        <div class="mt-10 grid gap-5 lg:mt-14 lg:grid-cols-[.9fr_1.1fr]">
          <div class="rounded-3xl border border-white/10 bg-white/[.035] p-6 sm:p-8">
            <div class="flex items-center justify-between">
              <div>
                <span class="text-[10px] tracking-[.2em] text-[#C9A86A]">DATA INPUT</span>
                <h3 class="mt-2 text-xl font-semibold">全球数据输入</h3>
              </div>
              <span class="text-2xl text-white/15">01</span>
            </div>
            <div class="mt-7 grid gap-3 sm:grid-cols-2">
              <div v-for="source in intelligenceSources" :key="source" class="rounded-xl border border-white/8 bg-white/[.025] px-4 py-3 text-xs leading-5 text-white/55">{{ source }}</div>
            </div>
          </div>

          <div class="rounded-3xl border border-[#C9A86A]/25 bg-[#C9A86A]/[.055] p-6 sm:p-8">
            <div class="flex items-center justify-between">
              <div>
                <span class="text-[10px] tracking-[.2em] text-[#C9A86A]">DECISION OUTPUT</span>
                <h3 class="mt-2 text-xl font-semibold">AI 辅助决策输出</h3>
              </div>
              <span class="text-2xl text-[#C9A86A]/25">02</span>
            </div>
            <div class="mt-7 grid gap-3 sm:grid-cols-2">
              <div v-for="output in aiDecisionOutputs" :key="output" class="flex items-center gap-3 rounded-xl border border-[#C9A86A]/10 bg-[#071A2B]/40 px-4 py-3 text-xs text-white/70">
                <span class="text-[#D7BC83]">✓</span>{{ output }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-pad bg-[#F7F8FA]">
      <div class="container-shell">
        <div class="text-center">
          <div class="eyebrow">PRODUCT INNOVATION PIPELINE</div>
          <h2 class="section-title mx-auto mt-5 max-w-3xl">把市场机会转化为可规模化产品</h2>
          <p class="section-copy mx-auto mt-5 max-w-2xl">每一个新品都经过需求验证、联合开发、市场测试和质量放行，减少凭感觉开发与大批量压货的风险。</p>
        </div>

        <div class="mt-10 grid gap-3 md:mt-14 md:grid-cols-5">
          <article v-for="(stage,index) in productDevelopmentStages" :key="stage.title" class="relative rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <span class="text-xs text-[#C9A86A]">0{{ index + 1 }}</span>
            <h3 class="mt-4 font-semibold text-[#0B1F33]">{{ stage.title }}</h3>
            <div class="mt-5 space-y-2">
              <div v-for="item in stage.items" :key="item" class="text-xs leading-5 text-slate-500">— {{ item }}</div>
            </div>
            <span v-if="index < productDevelopmentStages.length - 1" class="absolute -right-2.5 top-1/2 z-10 hidden text-[#C9A86A] md:block">→</span>
          </article>
        </div>

        <div class="mt-6 rounded-2xl bg-[#0B1F33] px-5 py-5 text-sm leading-7 text-white/65 sm:px-7">
          <b class="mr-2 text-[#D7BC83]">工厂参与：</b>制造工艺、生产技术、模具开发、供应链保障与产品迭代；
          <b class="ml-0 mr-2 text-[#D7BC83] sm:ml-4">行星参与：</b>市场研究、消费者需求、产品定位、设计、测试与全球上市。
        </div>
      </div>
    </section>

    <section class="section-pad">
      <div class="container-shell">
        <div class="max-w-3xl">
          <div class="eyebrow">GLOBAL INFRASTRUCTURE</div>
          <h2 class="section-title mt-5">让产品真正进入全球市场</h2>
          <p class="section-copy mt-6">产品上市只是开始。品牌、认证、渠道、广告、仓储和售后共同决定一个项目能否长期经营。</p>
        </div>

        <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14">
          <figure class="relative overflow-hidden rounded-3xl">
            <NuxtImg src="/images/overseas-warehouse.png" alt="行星跨境海外仓履约场景" class="aspect-[16/9] w-full object-cover" sizes="100vw sm:50vw" loading="lazy" />
            <figcaption class="absolute bottom-4 left-4 rounded-full bg-[#071725]/75 px-4 py-2 text-xs text-white backdrop-blur-md">海外仓储与本地履约</figcaption>
          </figure>
          <figure class="relative overflow-hidden rounded-3xl">
            <NuxtImg src="/images/about/operations.webp" alt="全球品牌数字化运营团队" class="aspect-[16/9] w-full object-cover" sizes="100vw sm:50vw" loading="lazy" />
            <figcaption class="absolute bottom-4 left-4 rounded-full bg-[#071725]/75 px-4 py-2 text-xs text-white backdrop-blur-md">数据驱动全球运营</figcaption>
          </figure>
        </div>

        <div class="mt-10 grid gap-4 lg:mt-14 lg:grid-cols-2">
          <article class="rounded-3xl bg-[#0B1F33] p-6 text-white sm:p-8">
            <span class="text-[10px] tracking-[.2em] text-[#C9A86A]">BRAND MATRIX</span>
            <h3 class="mt-3 text-2xl font-semibold">一个品牌，一个生活场景</h3>
            <div class="mt-7 grid gap-3 sm:grid-cols-3">
              <div v-for="[name,position] in brands" :key="name" class="rounded-2xl border border-white/10 bg-white/[.035] p-4">
                <b class="text-[#D7BC83]">{{ name }}</b>
                <small class="mt-2 block text-[11px] leading-5 text-white/45">{{ position }}</small>
              </div>
            </div>
          </article>

          <article class="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <span class="text-[10px] tracking-[.2em] text-[#A07D43]">GLOBAL COMPLIANCE</span>
            <h3 class="mt-3 text-2xl font-semibold text-[#0B1F33]">目标市场合规与知识产权</h3>
            <div class="mt-7 flex flex-wrap gap-2">
              <span v-for="item in certifications" :key="item" class="rounded-full border border-slate-200 px-3 py-1.5 text-xs text-slate-500">{{ item }}</span>
            </div>
            <p class="mt-6 text-sm leading-7 text-slate-500">同步规划商标、专利与产品认证，为品牌长期经营建立安全边界。</p>
          </article>

          <article class="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <span class="text-[10px] tracking-[.2em] text-[#A07D43]">MULTI-CHANNEL SALES</span>
            <h3 class="mt-3 text-2xl font-semibold text-[#0B1F33]">多平台、多国家、多渠道</h3>
            <div class="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-100 bg-slate-100 sm:grid-cols-5">
              <span v-for="platform in platforms" :key="platform" class="grid min-h-14 place-items-center bg-white px-2 text-center text-[11px] text-slate-500">{{ platform }}</span>
            </div>
          </article>

          <article class="rounded-3xl bg-[#F3EBDD] p-6 sm:p-8">
            <span class="text-[10px] tracking-[.2em] text-[#8A6B38]">FULFILLMENT & MARKETING</span>
            <h3 class="mt-3 text-2xl font-semibold text-[#0B1F33]">全球交付与增长双轮驱动</h3>
            <div class="mt-7 grid gap-3 sm:grid-cols-2">
              <div class="rounded-2xl bg-white/65 p-5">
                <b class="text-2xl text-[#0B1F33]">20+</b>
                <span class="mt-1 block text-xs text-slate-500">国家和地区海外仓网络</span>
                <p class="mt-4 text-xs leading-6 text-slate-500">仓储、配送、退货、维修、翻新与大件产品定制履约。</p>
              </div>
              <div class="rounded-2xl bg-white/65 p-5">
                <b class="text-2xl text-[#0B1F33]">80 / 20</b>
                <span class="mt-1 block text-xs text-slate-500">站内精准营销 / 站外品牌传播</span>
                <p class="mt-4 text-xs leading-6 text-slate-500">兼顾平台转化效率与长期品牌认知建设。</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section-pad bg-[#F7F8FA]">
      <div class="container-shell grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
        <div>
          <div class="eyebrow">PARTNER ONBOARDING</div>
          <h2 class="section-title mt-5">制造企业如何接入 PGBOS</h2>
          <div class="mt-9 space-y-3">
            <article v-for="step in partnerAccessSteps" :key="step.code" class="grid grid-cols-[42px_1fr] gap-4 rounded-2xl border border-slate-200 bg-white p-5 sm:grid-cols-[54px_1fr] sm:p-6">
              <span class="grid h-10 w-10 place-items-center rounded-full bg-[#0B1F33] text-xs text-[#D7BC83] sm:h-12 sm:w-12">{{ step.code }}</span>
              <div>
                <h3 class="font-semibold text-[#0B1F33]">{{ step.title }}</h3>
                <p class="mt-2 text-sm leading-7 text-slate-500">{{ step.desc }}</p>
              </div>
            </article>
          </div>
        </div>

        <div class="self-start rounded-3xl bg-[#0B1F33] p-6 text-white sm:p-9 lg:sticky lg:top-28">
          <span class="text-[10px] tracking-[.2em] text-[#C9A86A]">VALUE FOR MANUFACTURERS</span>
          <h3 class="mt-4 text-2xl font-semibold leading-snug sm:text-3xl">工厂获得的，不只是订单</h3>
          <p class="mt-5 text-sm leading-7 text-white/55">PGBOS 的目标，是将制造企业的研发、品质与产能优势，转化为长期全球经营能力。</p>
          <div class="mt-7 space-y-3">
            <div v-for="item in partnerOutcomes" :key="item" class="flex items-start gap-3 rounded-xl border border-white/8 bg-white/[.035] px-4 py-3 text-sm text-white/70">
              <span class="mt-0.5 text-[#D7BC83]">✓</span>{{ item }}
            </div>
          </div>
          <NuxtLink to="/#apply" class="btn-primary mt-8 w-full">评估合作机会 →</NuxtLink>
        </div>
      </div>
    </section>

    <section class="section-pad bg-[#071A2B] text-white">
      <div class="container-shell text-center">
        <div class="eyebrow text-[#C9A86A]">CONTINUOUS IMPROVEMENT</div>
        <h2 class="mx-auto mt-5 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">全球品牌运营不是一次成功，而是持续优化</h2>
        <p class="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/50 sm:text-base sm:leading-8">每一次销售、评价、退货和供应链反馈，都会成为下一轮产品与经营升级的输入。</p>
        <div class="mx-auto mt-9 flex max-w-4xl flex-wrap justify-center gap-2 sm:mt-10 sm:gap-3">
          <span v-for="signal in improvementSignals" :key="signal" class="rounded-full border border-white/12 px-4 py-2 text-xs text-white/55 sm:px-5 sm:text-sm">{{ signal }}</span>
        </div>
        <div class="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <NuxtLink to="/#apply" class="btn-primary">提交合作申请 <span>↗</span></NuxtLink>
          <NuxtLink to="/business-model" class="btn-secondary">了解联营机制 <span>→</span></NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>
