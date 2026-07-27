<script setup lang="ts">
import {
  channelCapabilities,
  countryMarkets,
  fulfillmentSteps,
  marketplaceGroups
} from '~/data/platforms'

usePageSeo(
  '主营平台｜全球电商渠道与海外仓网络',
  '行星跨境覆盖 Amazon、Walmart、Wayfair、Home Depot、Lowe’s、Target、OTTO、Kaufland、BOL、Allegro 等主流平台，并建立覆盖 20 多个国家和地区的海外仓履约网络。',
  '全球电商平台,Amazon合作,Walmart合作,Wayfair合作,海外仓物流,制造企业出海,全球渠道运营'
)
</script>

<template>
  <main>
    <section class="relative min-h-[700px] overflow-hidden bg-[#071725] pt-20 text-white sm:min-h-[760px]">
      <NuxtImg
        src="/images/overseas-warehouse.png"
        alt="行星跨境全球海外仓与智能履约网络"
        class="absolute inset-0 h-full w-full object-cover object-center"
        sizes="100vw"
        preload
      />
      <div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,23,37,.98)_0%,rgba(7,23,37,.88)_35%,rgba(7,23,37,.25)_78%,rgba(7,23,37,.5)_100%)]" />
      <div class="absolute inset-0 bg-[linear-gradient(0deg,rgba(7,23,37,.72)_0%,transparent_45%)]" />
      <div class="container-shell relative flex min-h-[620px] items-center py-20 sm:min-h-[680px]">
        <div class="max-w-3xl">
          <div class="eyebrow text-[#D1B477]">GLOBAL CHANNEL NETWORK</div>
          <h1 class="mt-6 text-[clamp(42px,6vw,76px)] font-semibold leading-[1.08] tracking-[-.05em]">
            连接全球平台<br><span class="text-[#D8BA7A]">抵达本地消费者</span>
          </h1>
          <p class="mt-7 max-w-2xl text-[15px] leading-8 text-white/62 sm:text-lg">
            从平台准入、品牌内容、广告运营到海外仓履约，我们以多平台、多国家、多渠道布局，帮助中国制造建立稳定、可持续的全球销售网络。
          </p>
          <div class="mt-9 flex flex-col gap-3 sm:flex-row">
            <NuxtLink to="/process#consultation" class="btn-primary">咨询渠道合作 →</NuxtLink>
            <a href="#platform-network" class="btn-secondary">查看平台矩阵</a>
          </div>
        </div>
      </div>
      <div class="container-shell relative -mt-24 pb-8">
        <div class="grid grid-cols-2 overflow-hidden rounded-2xl border border-white/12 bg-[#0B1F33]/82 backdrop-blur-xl sm:grid-cols-4">
          <div v-for="[value,label] in [['10+','全球主流平台'],['20+','仓储国家和地区'],['5','重点消费区域'],['全链路','运营与履约']]" :key="label" class="border-r border-white/10 px-4 py-6 text-center last:border-0 sm:py-7">
            <div class="text-2xl font-semibold text-[#D8BA7A] sm:text-3xl">{{ value }}</div>
            <div class="mt-2 text-[11px] text-white/45 sm:text-xs">{{ label }}</div>
          </div>
        </div>
      </div>
    </section>

    <section id="platform-network" class="section-pad bg-[#F7F8FA]">
      <div class="container-shell">
        <div class="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-14">
          <div>
            <div class="eyebrow">MARKETPLACE PORTFOLIO</div>
            <h2 class="section-title mt-5">全球主流平台<br>协同经营</h2>
            <p class="section-copy mt-6">不同平台承载不同用户、品类与增长阶段。我们根据品牌定位和产品特征制定渠道组合，而不是依赖单一流量入口。</p>
          </div>
          <div class="space-y-5">
            <article v-for="group in marketplaceGroups" :key="group.market" class="card overflow-hidden">
              <div class="border-b border-slate-100 p-6 sm:flex sm:items-end sm:justify-between sm:p-8">
                <div>
                  <div class="text-xs tracking-[.18em] text-[#A07D43]">{{ group.en }}</div>
                  <h3 class="mt-3 text-2xl font-semibold text-[#0B1F33]">{{ group.market }}</h3>
                </div>
                <p class="mt-3 max-w-md text-sm leading-7 text-slate-500 sm:mt-0 sm:text-right">{{ group.desc }}</p>
              </div>
              <div class="grid grid-cols-2 gap-px bg-slate-100 sm:grid-cols-3">
                <div v-for="platform in group.platforms" :key="platform.name" class="group min-h-40 bg-white p-5 transition hover:bg-[#FBF9F4] sm:p-6">
                  <div class="flex h-12 items-center">
                    <img :src="platform.logo" :alt="`${platform.name} 平台标识`" class="max-h-9 max-w-[112px] object-contain object-left transition group-hover:scale-105">
                  </div>
                  <div class="mt-5 text-sm font-semibold text-[#0B1F33]">{{ platform.name }}</div>
                  <div class="mt-2 text-xs leading-5 text-slate-400">{{ platform.role }}</div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="section-pad">
      <div class="container-shell">
        <div class="max-w-3xl">
          <div class="eyebrow">MARKET FOOTPRINT</div>
          <h2 class="section-title mt-5">覆盖全球主要消费市场</h2>
          <p class="section-copy mt-6">围绕北美、欧洲、日本、澳洲及中东市场，按国家消费习惯、法规和渠道特点开展本地化运营。</p>
        </div>
        <div class="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 md:mt-14">
          <article v-for="market in countryMarkets" :key="market.code" class="group rounded-2xl border border-slate-200 bg-white p-4 transition hover:-translate-y-1 hover:border-[#C9A86A]/60 hover:shadow-lg sm:p-5">
            <div class="h-10 w-14 overflow-hidden rounded-md border border-slate-100 bg-slate-50">
              <img :src="market.flag" :alt="`${market.country}国旗`" class="h-full w-full object-cover">
            </div>
            <div class="mt-5 flex items-baseline justify-between gap-2">
              <h3 class="font-semibold text-[#0B1F33]">{{ market.country }}</h3>
              <span class="text-[10px] tracking-wider text-slate-300">{{ market.code }}</span>
            </div>
            <div class="mt-2 text-[11px] text-[#A07D43]">{{ market.region }}</div>
            <p class="mt-3 text-xs leading-5 text-slate-400">{{ market.focus }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section-pad bg-[#0B1F33] text-white">
      <div class="container-shell">
        <div class="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <div>
            <div class="eyebrow text-[#C9A86A]">CHANNEL OPERATIONS</div>
            <h2 class="mt-5 text-3xl font-semibold leading-tight sm:text-5xl">不止上线平台，更要持续经营品牌</h2>
            <p class="mt-6 max-w-xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">以数据驱动平台运营，将市场洞察、内容表达、广告投放、库存管理和消费者反馈连接成完整闭环。</p>
          </div>
          <div class="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2">
            <article v-for="(item,index) in channelCapabilities" :key="item.title" class="bg-[#0B1F33] p-6 sm:p-7">
              <div class="text-xs text-[#C9A86A]">0{{ index + 1 }}</div>
              <h3 class="mt-4 text-lg font-semibold">{{ item.title }}</h3>
              <p class="mt-3 text-sm leading-7 text-white/48">{{ item.desc }}</p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="section-pad bg-[#F7F8FA]">
      <div class="container-shell">
        <div class="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div class="overflow-hidden rounded-3xl bg-[#0B1F33]">
            <NuxtImg
              src="/images/overseas-warehouse.png"
              alt="现代化海外仓储与自动化订单履约"
              class="aspect-[4/3] h-full w-full object-cover object-[70%_center]"
              sizes="100vw lg:50vw"
              loading="lazy"
            />
          </div>
          <div>
            <div class="eyebrow">GLOBAL FULFILLMENT</div>
            <h2 class="section-title mt-5">覆盖 20+ 国家和地区的海外仓网络</h2>
            <p class="section-copy mt-6">通过海外仓合作网络实现本地库存、本地配送和本地售后，缩短消费者收货时间，也为大件家居和高客单产品提供更稳定的履约基础。</p>
            <div class="mt-8 grid gap-3 sm:grid-cols-2">
              <div v-for="(step,index) in fulfillmentSteps" :key="step" class="flex min-h-16 items-center gap-4 rounded-xl border border-slate-200 bg-white px-4">
                <span class="text-xs font-semibold text-[#C9A86A]">0{{ index + 1 }}</span>
                <span class="text-sm text-[#0B1F33]">{{ step }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-pad">
      <div class="container-shell grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <div class="eyebrow">GO GLOBAL WITH PLANET</div>
          <h2 class="section-title mt-5 max-w-4xl">让您的产品进入合适的平台，成为长期经营的全球品牌</h2>
          <p class="section-copy mt-5 max-w-2xl">提交企业主营产品、目标市场与合作需求，我们将评估渠道适配度和联营机会。</p>
        </div>
        <NuxtLink to="/process#consultation" class="btn-primary w-full text-center sm:w-auto">提交合作申请 →</NuxtLink>
      </div>
    </section>
  </main>
</template>
