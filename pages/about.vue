<script setup lang="ts">
import { timeline, values } from '~/data/company'

usePageSeo(
  '关于我们',
  '了解行星跨境的企业使命、专业团队、全球布局、发展历程及品牌联营能力。'
)

const teamCapabilities = [
  {
    title: '外语客服团队',
    en: 'GLOBAL CUSTOMER CARE',
    desc: '面向全球消费者提供多时区、多语言售前与售后支持，持续沉淀用户反馈。',
    image: '/images/about/customer-service.webp',
    alt: '行星跨境外语客服团队示意'
  },
  {
    title: '产品研发团队',
    en: 'PRODUCT & R&D',
    desc: '连接市场洞察、工业设计、结构优化、测试验证和产品迭代。',
    image: '/images/about/product-rd.webp',
    alt: '行星跨境产品研发团队示意'
  },
  {
    title: '全球运营团队',
    en: 'GLOBAL OPERATIONS',
    desc: '覆盖平台运营、广告营销、内容本地化、库存管理和经营分析。',
    image: '/images/about/operations.webp',
    alt: '行星跨境全球运营团队示意'
  }
]
</script>

<template>
  <main>
    <PageHero
      eyebrow="ABOUT PLANET"
      title="连接中国制造与全球消费市场"
      desc="我们不是采购商、传统电商卖家或第三方代运营，而是全球供应链整合商、全球渠道运营商和品牌联营平台。"
    />

    <section class="section-pad">
      <div class="container-shell">
        <div class="grid gap-9 lg:grid-cols-2 lg:gap-14">
          <div>
            <div class="eyebrow">OUR PURPOSE</div>
            <h2 class="section-title mt-5">让每一家优秀工厂<br>都拥有自己的全球品牌</h2>
          </div>
          <div class="section-copy space-y-5">
            <p>中国拥有全球领先的制造能力，但仅依靠 OEM、传统外贸与价格竞争，已难以持续创造更高价值。</p>
            <p>行星跨境以市场定义产品、以品牌创造价值、以合作实现共赢，帮助制造企业完成从“制造产品”到“创造品牌价值”的升级。</p>
          </div>
        </div>
        <figure class="relative mt-10 overflow-hidden rounded-3xl bg-[#0B1F33] sm:mt-14">
          <NuxtImg src="/images/about/company-team-real.webp" alt="行星跨境团队会议现场" class="aspect-[16/9] w-full object-cover" sizes="100vw" preload />
        </figure>
      </div>
    </section>

    <section class="section-pad bg-[#F7F8FA]">
      <div class="container-shell">
        <div class="eyebrow">MISSION & VISION</div>
        <div class="mt-8 grid gap-4 md:grid-cols-2 md:gap-5">
          <article class="card p-6 sm:p-9">
            <small class="text-[#A07D43]">使命</small>
            <h3 class="mt-5 text-2xl font-semibold leading-snug text-[#0B1F33] sm:text-3xl">帮助中国优秀制造企业，共同打造全球品牌。</h3>
          </article>
          <article class="card p-6 sm:p-9">
            <small class="text-[#A07D43]">愿景</small>
            <h3 class="mt-5 text-2xl font-semibold leading-snug text-[#0B1F33] sm:text-3xl">成为最具影响力的全球品牌联营平台。</h3>
          </article>
        </div>
        <div class="mt-4 grid grid-cols-2 gap-3 sm:gap-4 md:mt-5 md:grid-cols-5">
          <article v-for="[title,desc] in values" :key="title" class="rounded-2xl bg-white p-5 sm:p-6">
            <h4 class="font-semibold text-[#0B1F33]">{{ title }}</h4>
            <p class="mt-3 text-xs leading-6 text-slate-500">{{ desc }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section-pad">
      <div class="container-shell">
        <div class="grid items-center gap-9 lg:grid-cols-2 lg:gap-14">
          <div class="overflow-hidden rounded-3xl">
            <NuxtImg src="/images/about/office.webp" alt="行星跨境现代办公环境示意照片" class="aspect-[4/3] w-full object-cover" sizes="100vw lg:50vw" loading="lazy" />
          </div>
          <div>
            <div class="eyebrow">OUR WORKPLACE</div>
            <h2 class="section-title mt-5">连接创意、数据与全球市场的工作空间</h2>
            <p class="section-copy mt-6">团队在同一体系内协同市场研究、产品研发、品牌内容、平台运营、供应链和全球履约，让决策更快回到产品与消费者。</p>
            <p class="mt-5 text-xs text-slate-400">当前为 AI 示意图片，后续替换为真实办公室照片。</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-pad bg-[#0B1F33] text-white">
      <div class="container-shell">
        <div class="max-w-3xl">
          <div class="eyebrow text-[#C9A86A]">PROFESSIONAL TEAMS</div>
          <h2 class="mt-5 text-3xl font-semibold leading-tight sm:text-5xl">专业、数字化、国际化的协同团队</h2>
          <p class="mt-6 text-sm leading-7 text-white/55 sm:text-base sm:leading-8">核心团队深耕跨境电商行业 10 年以上，在产品研发、品牌建设、平台运营、供应链、国际物流与数字化经营领域积累经验。</p>
        </div>
        <div class="mt-10 grid gap-5 lg:grid-cols-3 md:mt-14">
          <article v-for="team in teamCapabilities" :key="team.title" class="overflow-hidden rounded-3xl border border-white/10 bg-white/[.04]">
            <NuxtImg :src="team.image" :alt="team.alt" class="aspect-[4/3] w-full object-cover" sizes="100vw lg:33vw" loading="lazy" />
            <div class="p-6">
              <div class="text-[10px] tracking-[.18em] text-[#C9A86A]">{{ team.en }}</div>
              <h3 class="mt-3 text-xl font-semibold">{{ team.title }}</h3>
              <p class="mt-3 text-sm leading-7 text-white/50">{{ team.desc }}</p>
              <p class="mt-4 text-[10px] text-white/25">AI 示意图片 · 待真实照片替换</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section-pad">
      <div class="container-shell">
        <div class="eyebrow">MILESTONES</div>
        <h2 class="section-title mt-5">持续构建全球运营能力</h2>
        <div class="mt-12 sm:mt-16"><Timeline :items="timeline" /></div>
      </div>
    </section>

    <section class="section-pad bg-[#F7F8FA]">
      <div class="container-shell grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div>
          <div class="eyebrow">GLOBAL FOOTPRINT</div>
          <h2 class="section-title mt-5">深耕全球主要消费市场</h2>
          <p class="section-copy mt-6">业务覆盖北美、欧洲、日本、澳洲及中东，并依托覆盖 20 多个国家和地区的海外仓合作网络，建立本地化履约体系。</p>
        </div>
        <GlobalMap class="min-h-[230px]" />
      </div>
    </section>

    <section class="section-pad bg-white">
      <div class="container-shell">
        <div class="overflow-hidden rounded-3xl bg-[#0B1F33] p-6 text-white sm:p-9 lg:p-12">
          <div class="grid gap-10 lg:grid-cols-[1fr_1fr_auto] lg:items-start lg:gap-14">
            <div>
              <div class="eyebrow text-[#C9A86A]">CONTACT US</div>
              <h2 class="mt-5 text-3xl font-semibold sm:text-4xl">联系我们</h2>
              <p class="mt-5 text-sm leading-7 text-white/55">欢迎制造企业、产业链伙伴与我们交流全球品牌联营机会。</p>
              <NuxtLink to="/#apply" class="btn-primary mt-7">合作咨询 →</NuxtLink>
            </div>
            <dl class="space-y-5 text-sm">
              <div>
                <dt class="text-xs text-white/30">合作邮箱</dt>
                <dd class="mt-2 space-y-1 break-all">
                  <a href="mailto:connect@xingxingkuajing.com" class="block text-white/70 transition hover:text-[#C9A86A]">connect@xingxingkuajing.com</a>
                  <a href="mailto:business@xingxingkuajing.com" class="block text-white/70 transition hover:text-[#C9A86A]">business@xingxingkuajing.com</a>
                </dd>
              </div>
              <div>
                <dt class="text-xs text-white/30">联系电话</dt>
                <dd class="mt-2"><a href="tel:+8613590596913" class="text-white/70 transition hover:text-[#C9A86A]">+86 135 9059 6913</a></dd>
              </div>
              <div>
                <dt class="text-xs text-white/30">公司地址</dt>
                <dd class="mt-2 text-white/45">广州市白云区未来智都 T1 栋 702</dd>
              </div>
              <div>
                <dt class="text-xs text-white/30">办公时间</dt>
                <dd class="mt-2 text-white/45">待补充</dd>
              </div>
            </dl>
            <div>
              <div class="grid grid-cols-2 gap-3">
                <div v-for="(qr,index) in ['/images/contact/wechat-business-1.png','/images/contact/wechat-business-2.png']" :key="qr">
                  <div class="overflow-hidden rounded-2xl bg-white p-2">
                    <img :src="qr" :alt="`企业微信商务咨询二维码 ${index + 1}`" class="aspect-square w-28 object-contain sm:w-32">
                  </div>
                  <p class="mt-2 text-center text-[10px] text-white/35">商务咨询 0{{ index + 1 }}</p>
                </div>
              </div>
              <p class="mt-3 text-center text-xs text-white/30">扫码添加企业微信</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
