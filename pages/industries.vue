<script setup lang="ts">
import { categoryRoadmap, industries, industryEvaluation } from '~/data/industries'

usePageSeo(
  '合作行业｜家居制造企业全球品牌联营',
  '行星跨境面向镜类、家具、卫浴与家居生活方式制造企业，提供产品共创、品牌孵化、全球渠道运营与供应链协同。'
)

const activeIndustry = ref(industries[0])
</script>

<template>
  <main>
    <PageHero
      eyebrow="INDUSTRY PARTNERSHIP"
      title="聚焦家居产业，共建全球生活空间品牌"
      desc="我们寻找的不只是供应商，而是在产品、品质与长期主义上高度一致的制造伙伴。以市场数据确定机会，以联合研发创造产品，以全球运营沉淀品牌资产。"
    />

    <section class="border-b border-slate-100 bg-white">
      <div class="container-shell grid grid-cols-2 divide-x divide-slate-100 py-7 sm:grid-cols-4 sm:py-9">
        <div v-for="[value, label] in [['4','重点产业方向'],['5','全球空间赛道'],['10+','主流销售渠道'],['20+','仓储国家和地区']]" :key="label" class="px-3 text-center sm:px-5">
          <div class="text-2xl font-semibold text-[#0B1F33] sm:text-3xl">{{ value }}</div>
          <div class="mt-2 text-[11px] text-slate-400 sm:text-xs">{{ label }}</div>
        </div>
      </div>
    </section>

    <section class="section-pad bg-[#F7F8FA]">
      <div class="container-shell">
        <div class="max-w-3xl">
          <div class="eyebrow">PRIORITY INDUSTRIES</div>
          <h2 class="section-title mt-5">我们重点合作的制造企业</h2>
          <p class="section-copy mt-5">优先聚焦具有制造深度、研发基础和全球市场适配能力的家居产业伙伴。</p>
        </div>
        <div class="mt-10 grid gap-4 sm:grid-cols-2 md:mt-14 md:gap-5">
          <IndustryCard v-for="item in industries" :key="item.name" :item="item" />
        </div>
      </div>
    </section>

    <section class="section-pad">
      <div class="container-shell">
        <div class="grid gap-9 lg:grid-cols-[.7fr_1.3fr] lg:gap-14">
          <div class="lg:sticky lg:top-28 lg:self-start">
            <div class="eyebrow">INDUSTRY PLAYBOOK</div>
            <h2 class="section-title mt-5">每个行业，都有清晰的合作切入口</h2>
            <p class="section-copy mt-5">选择您的主营领域，了解目标产品、增长机会和我们重点关注的制造能力。</p>
            <div class="mt-7 grid grid-cols-2 gap-2 lg:grid-cols-1">
              <button
                v-for="item in industries"
                :key="item.slug"
                class="rounded-xl border px-4 py-3 text-left text-sm transition"
                :class="activeIndustry.slug === item.slug ? 'border-[#C9A86A] bg-[#C9A86A]/10 text-[#0B1F33]' : 'border-slate-200 text-slate-500 hover:border-slate-300'"
                type="button"
                @click="activeIndustry = item"
              >
                {{ item.name }}
              </button>
            </div>
          </div>

          <article class="overflow-hidden rounded-3xl bg-[#0B1F33] p-6 text-white sm:p-9 lg:p-11">
            <div class="text-xs tracking-[.2em] text-[#C9A86A]">{{ activeIndustry.en }}</div>
            <h3 class="mt-4 text-3xl font-semibold sm:text-4xl">{{ activeIndustry.name }}</h3>
            <p class="mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">{{ activeIndustry.opportunity }}</p>
            <div class="mt-8 grid gap-7 border-t border-white/10 pt-8 sm:grid-cols-2">
              <div>
                <div class="text-sm font-medium text-white">重点制造能力</div>
                <ul class="mt-4 space-y-3">
                  <li v-for="item in activeIndustry.capabilities" :key="item" class="flex gap-3 text-sm text-white/55">
                    <span class="text-[#C9A86A]">✓</span>{{ item }}
                  </li>
                </ul>
              </div>
              <div>
                <div class="text-sm font-medium text-white">可启动的合作</div>
                <ul class="mt-4 space-y-3">
                  <li v-for="item in activeIndustry.cooperation" :key="item" class="flex gap-3 text-sm text-white/55">
                    <span class="text-[#C9A86A]">→</span>{{ item }}
                  </li>
                </ul>
              </div>
            </div>
            <NuxtLink to="/process#consultation" class="btn-primary mt-9">咨询该行业合作 →</NuxtLink>
          </article>
        </div>
      </div>
    </section>

    <section class="section-pad bg-[#F7F8FA]">
      <div class="container-shell">
        <div class="grid gap-9 lg:grid-cols-[.8fr_1.2fr] lg:gap-14">
          <div>
            <div class="eyebrow">PARTNER STANDARD</div>
            <h2 class="section-title mt-5">我们如何评估制造伙伴</h2>
            <p class="section-copy mt-5">品类只是起点，长期合作更取决于企业能力、经营理念与全球化意愿。</p>
          </div>
          <div class="grid gap-3 sm:grid-cols-2">
            <article v-for="(item, index) in industryEvaluation" :key="item.title" class="card p-5 sm:p-6" :class="{ 'sm:col-span-2': index === industryEvaluation.length - 1 }">
              <div class="text-xs text-[#A07D43]">0{{ index + 1 }}</div>
              <h3 class="mt-4 font-semibold text-[#0B1F33]">{{ item.title }}</h3>
              <p class="mt-3 text-sm leading-7 text-slate-500">{{ item.desc }}</p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="section-pad">
      <div class="container-shell">
        <div class="max-w-3xl">
          <div class="eyebrow">CATEGORY ROADMAP</div>
          <h2 class="section-title mt-5">从优势单品，到全球生活空间品牌</h2>
          <p class="section-copy mt-5">以镜类为优势基座，逐步拓展室内家具、卫浴、户外与厨房空间，形成协同增长的全球家居品牌矩阵。</p>
        </div>
        <div class="mt-10 grid gap-px overflow-hidden rounded-3xl bg-slate-200 sm:grid-cols-2 lg:grid-cols-5 md:mt-14">
          <article v-for="(item, index) in categoryRoadmap" :key="item.title" class="bg-white p-6 lg:min-h-64">
            <div class="flex items-center justify-between">
              <span class="text-xs tracking-wider text-[#A07D43]">{{ item.period }}</span>
              <span class="text-xs text-slate-300">0{{ index + 1 }}</span>
            </div>
            <h3 class="mt-8 text-xl font-semibold text-[#0B1F33]">{{ item.title }}</h3>
            <p class="mt-4 text-sm leading-7 text-slate-500">{{ item.desc }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section-pad bg-[#0B1F33] text-white">
      <div class="container-shell grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <div class="eyebrow text-[#C9A86A]">BUILD THE NEXT GLOBAL BRAND</div>
          <h2 class="mt-5 max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl">您的制造能力，可能正是下一个全球品牌的起点</h2>
          <p class="mt-5 max-w-2xl text-sm leading-7 text-white/55">提交主营品类与企业能力，我们将结合目标市场、渠道数据与品牌战略评估合作机会。</p>
        </div>
        <NuxtLink to="/process#consultation" class="btn-primary w-full text-center sm:w-auto">提交合作申请 →</NuxtLink>
      </div>
    </section>
  </main>
</template>
