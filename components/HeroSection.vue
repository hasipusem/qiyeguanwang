<template>
  <section class="relative min-h-[800px] overflow-hidden bg-[#0B1F33] pt-20 text-white">
    <div class="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] [background-size:80px_80px]"></div>
    <div class="absolute -right-64 top-10 h-[720px] w-[720px] rounded-full border border-[#C9A86A]/20 before:absolute before:inset-20 before:rounded-full before:border before:border-white/10 after:absolute after:inset-44 after:rounded-full after:border after:border-[#C9A86A]/20"></div>
    <GlobalMap class="absolute right-[-6%] top-40 hidden w-[58%] opacity-70 lg:block" />
    <div class="container-shell relative z-10 flex min-h-[720px] items-center">
      <div class="max-w-3xl reveal">
        <div class="mb-7 flex items-center gap-4"><div class="gold-line"></div><span class="text-xs tracking-[.25em] text-[#D5BB85]">GLOBAL BRAND PARTNERSHIP</span></div>
        <h1 class="text-[clamp(46px,7vw,88px)] font-semibold leading-[1.06] tracking-[-.055em]">让中国制造<br><span class="text-[#D7BC83]">拥有全球品牌</span></h1>
        <p class="mt-8 max-w-2xl text-[17px] leading-8 text-white/62">行星跨境通过全球品牌联营模式，帮助优秀制造企业连接全球消费市场，共同打造具有国际竞争力的品牌。</p>
        <div class="mt-10 flex flex-wrap gap-3"><NuxtLink to="/contact" class="btn-primary">立即合作 <span>↗</span></NuxtLink><NuxtLink to="/business-model" class="btn-secondary">了解合作模式 <span>→</span></NuxtLink></div>
        <div class="mt-16 grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-7">
          <div><b class="text-2xl text-[#D7BC83]">20+</b><span class="mt-1 block text-xs text-white/40">国家和地区仓储网络</span></div>
          <div><b class="text-2xl text-[#D7BC83]">10+</b><span class="mt-1 block text-xs text-white/40">全球主流渠道</span></div>
          <div><b class="text-2xl text-[#D7BC83]">10年+</b><span class="mt-1 block text-xs text-white/40">核心团队经验</span></div>
        </div>
      </div>
    </div>
  </section>
</template>
