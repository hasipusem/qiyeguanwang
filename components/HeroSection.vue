<template>
  <section class="relative overflow-hidden bg-[#0B1F33] pt-20 text-white">
    <div class="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] [background-size:80px_80px]"></div>
    <div class="absolute -right-72 top-4 h-[760px] w-[760px] rounded-full border border-[#C9A86A]/15"></div>
    <div class="container-shell relative z-10 grid min-h-[720px] items-center gap-12 py-16 md:grid-cols-[1.02fr_.98fr] lg:gap-20">
      <div class="reveal">
        <div class="mb-7 flex items-center gap-4"><div class="gold-line"></div><span class="text-[10px] tracking-[.22em] text-[#D5BB85] sm:text-xs sm:tracking-[.25em]">GLOBAL BRAND PARTNERSHIP</span></div>
        <h1 class="text-[clamp(42px,6.1vw,76px)] font-semibold leading-[1.06] tracking-[-.055em]">让中国制造<br><span class="text-[#D7BC83]">拥有全球品牌</span></h1>
        <p class="mt-7 max-w-xl text-[15px] leading-8 text-white/62 sm:text-[17px]">行星跨境通过全球品牌联营模式，帮助优秀制造企业连接全球消费市场，共同打造具有国际竞争力的品牌。</p>
        <div class="mt-9 flex flex-col gap-3 sm:flex-row"><NuxtLink to="/#apply" class="btn-primary">合作咨询 <span>↗</span></NuxtLink><NuxtLink to="/business-model" class="btn-secondary">了解合作模式 <span>→</span></NuxtLink></div>
        <div class="mt-12 grid grid-cols-3 gap-3 border-t border-white/10 pt-6 sm:max-w-xl sm:gap-6">
          <div><b class="text-xl text-[#D7BC83] sm:text-2xl">20+</b><span class="mt-1 block text-[10px] leading-4 text-white/40 sm:text-xs">国家和地区<br class="hidden sm:block">仓储网络</span></div>
          <div><b class="text-xl text-[#D7BC83] sm:text-2xl">10+</b><span class="mt-1 block text-[10px] leading-4 text-white/40 sm:text-xs">全球主流<br class="hidden sm:block">渠道</span></div>
          <div><b class="text-xl text-[#D7BC83] sm:text-2xl">10年+</b><span class="mt-1 block text-[10px] leading-4 text-white/40 sm:text-xs">核心团队<br class="hidden sm:block">经验</span></div>
        </div>
      </div>
      <div class="relative mx-auto w-full max-w-[560px] reveal">
        <div class="absolute -inset-10 rounded-full bg-[#C9A86A]/5 blur-3xl"></div>
        <div class="relative overflow-hidden rounded-[28px] border border-white/12 bg-[#071A2B]/78 p-5 shadow-[0_32px_90px_rgba(0,0,0,.28)] backdrop-blur-sm sm:p-7">
          <div class="flex items-center justify-between border-b border-white/10 pb-4">
            <div><small class="text-[9px] tracking-[.24em] text-[#C9A86A]">GLOBAL NETWORK</small><h2 class="mt-1 text-sm font-medium text-white/85 sm:text-base">全球品牌运营网络</h2></div>
            <span class="rounded-full border border-emerald-300/20 bg-emerald-300/5 px-2.5 py-1 text-[9px] text-emerald-200/70">● LIVE</span>
          </div>
          <GlobalMap class="mt-4 min-h-[210px] sm:min-h-[260px]" />
          <div class="grid grid-cols-3 gap-2 border-t border-white/10 pt-4 text-center">
            <div class="rounded-xl bg-white/[.035] p-3"><b class="block text-sm text-[#D7BC83]">北美</b><small class="text-[9px] text-white/35">核心市场</small></div>
            <div class="rounded-xl bg-white/[.035] p-3"><b class="block text-sm text-[#D7BC83]">欧洲</b><small class="text-[9px] text-white/35">增长市场</small></div>
            <div class="rounded-xl bg-white/[.035] p-3"><b class="block text-sm text-[#D7BC83]">亚太</b><small class="text-[9px] text-white/35">战略市场</small></div>
          </div>
        </div>
        <div class="absolute -left-5 top-1/3 hidden rounded-xl border border-white/10 bg-[#102A41]/95 px-4 py-3 shadow-xl lg:block"><small class="text-[9px] tracking-widest text-white/35">SUPPLY</small><b class="mt-1 block text-xs text-white/80">中国制造中心</b></div>
        <div class="absolute -right-5 bottom-20 hidden rounded-xl border border-[#C9A86A]/20 bg-[#102A41]/95 px-4 py-3 shadow-xl lg:block"><small class="text-[9px] tracking-widest text-white/35">CHANNELS</small><b class="mt-1 block text-xs text-[#D7BC83]">全球渠道矩阵</b></div>
      </div>
    </div>
  </section>
</template>
