<script setup lang="ts">
import { caseCategories, caseStudies } from '~/data/cases'

usePageSeo(
  '成功案例｜制造企业全球品牌增长路径',
  '查看行星跨境在镜类、室内家具、卫浴空间与户外家具领域的品牌联营路径，了解从制造能力到全球渠道运营的合作方式。'
)

const activeCategory = ref<(typeof caseCategories)[number]>('全部')
const filteredCases = computed(() => activeCategory.value === '全部'
  ? caseStudies
  : caseStudies.filter(item => item.category === activeCategory.value)
)
</script>

<template>
  <main>
    <PageHero
      eyebrow="PARTNERSHIP CASES"
      title="从制造优势，到全球品牌增长"
      desc="围绕市场洞察、产品共创、品牌建设、渠道运营与全球履约，我们与制造伙伴共同探索长期增长路径。"
      image="/images/cases/smart-mirror.webp"
      image-alt="智能镜全球品牌合作案例"
      image-label="FROM PRODUCT TO GLOBAL BRAND"
    />

    <section class="border-b border-amber-200/60 bg-[#FBF8F1] py-5">
      <div class="container-shell flex gap-3 text-xs leading-6 text-[#806A43] sm:text-sm">
        <span class="shrink-0">说明</span>
        <p>镜类案例基于现有业务实践整理；其他案例为结合行业能力生成的合作场景示意，不代表已发生的客户业绩。正式客户名称与经营数据将在获得授权后补充。</p>
      </div>
    </section>

    <section class="section-pad bg-[#F7F8FA]">
      <div class="container-shell">
        <div class="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div class="max-w-3xl">
            <div class="eyebrow">CASE LIBRARY</div>
            <h2 class="section-title mt-5">典型品类合作路径</h2>
            <p class="section-copy mt-5">不同品类面对不同的产品、合规、渠道和履约问题，合作方案也必须建立在真实制造能力之上。</p>
          </div>
          <div class="flex gap-2 overflow-x-auto pb-2">
            <button
              v-for="category in caseCategories"
              :key="category"
              type="button"
              class="shrink-0 rounded-full border px-4 py-2 text-sm transition"
              :class="activeCategory === category ? 'border-[#0B1F33] bg-[#0B1F33] text-white' : 'border-slate-200 bg-white text-slate-500'"
              @click="activeCategory = category"
            >
              {{ category }}
            </button>
          </div>
        </div>

        <div class="mt-10 grid gap-6 lg:grid-cols-2 md:mt-14">
          <article v-for="item in filteredCases" :key="item.id" class="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_18px_55px_rgba(11,31,51,.07)]">
            <div class="relative overflow-hidden">
              <NuxtImg :src="item.image" :alt="item.imageAlt" class="aspect-[4/3] w-full object-cover transition duration-700 hover:scale-[1.03]" sizes="100vw lg:50vw" loading="lazy" />
              <span class="absolute left-5 top-5 rounded-full px-3 py-1.5 text-xs backdrop-blur-md" :class="item.status === '业务实践' ? 'bg-[#C9A86A] text-[#0B1F33]' : 'bg-[#0B1F33]/80 text-white'">{{ item.status }}</span>
            </div>
            <div class="p-6 sm:p-8">
              <div class="flex items-center justify-between gap-4 text-xs">
                <span class="tracking-[.16em] text-[#A07D43]">{{ item.category }}</span>
                <span class="text-slate-400">{{ item.location }}</span>
              </div>
              <h3 class="mt-4 text-2xl font-semibold leading-snug text-[#0B1F33]">{{ item.title }}</h3>
              <div class="mt-6">
                <div class="text-xs font-semibold text-slate-400">核心挑战</div>
                <p class="mt-2 text-sm leading-7 text-slate-600">{{ item.challenge }}</p>
              </div>
              <div class="mt-6 grid gap-6 border-t border-slate-100 pt-6 sm:grid-cols-2">
                <div>
                  <div class="text-xs font-semibold text-slate-400">联营方案</div>
                  <ul class="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                    <li v-for="point in item.solution" :key="point" class="flex gap-2"><span class="text-[#C9A86A]">→</span>{{ point }}</li>
                  </ul>
                </div>
                <div>
                  <div class="text-xs font-semibold text-slate-400">阶段成果</div>
                  <ul class="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                    <li v-for="point in item.outcomes" :key="point" class="flex gap-2"><span class="text-emerald-600">✓</span>{{ point }}</li>
                  </ul>
                </div>
              </div>
              <div class="mt-6 flex flex-wrap gap-2">
                <span v-for="channel in item.channels" :key="channel" class="rounded-full bg-slate-50 px-3 py-1.5 text-xs text-slate-500">{{ channel }}</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section-pad bg-[#0B1F33] text-white">
      <div class="container-shell grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <div class="eyebrow text-[#C9A86A]">YOUR GROWTH PATH</div>
          <h2 class="mt-5 max-w-4xl text-3xl font-semibold leading-tight sm:text-5xl">下一条增长路径，可以从您的制造优势开始</h2>
          <p class="mt-5 max-w-2xl text-sm leading-7 text-white/55">提交企业与主营产品信息，我们将结合市场、渠道与供应链能力评估合作机会。</p>
        </div>
        <NuxtLink to="/#apply" class="btn-primary">合作咨询 →</NuxtLink>
      </div>
    </section>
  </main>
</template>
