<template>
  <footer class="bg-[#071725] py-16 text-white">
    <div class="container-shell grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
      <div><div class="mb-5 text-lg font-semibold tracking-[.18em]">行星跨境</div><p class="max-w-sm text-sm leading-7 text-white/50">连接中国优秀制造能力与全球消费市场，共同打造具有国际竞争力的品牌。</p></div>
      <div><div class="mb-4 text-xs tracking-[.2em] text-[#C9A86A]">NAVIGATION</div><NuxtLink to="/business-model" class="block py-1.5 text-sm text-white/55">品牌联营模式</NuxtLink><NuxtLink to="/system" class="block py-1.5 text-sm text-white/55">全球运营体系</NuxtLink><NuxtLink to="/industries" class="block py-1.5 text-sm text-white/55">合作行业</NuxtLink></div>
      <div><div class="mb-4 text-xs tracking-[.2em] text-[#C9A86A]">PARTNERSHIP</div><p class="text-sm leading-7 text-white/55">面向年销售规模 5000 万元以上、具备持续研发和交付能力的制造企业。</p></div>
    </div>
    <div class="container-shell mt-12 border-t border-white/10 pt-6 text-xs text-white/30">© {{ new Date().getFullYear() }} Planet Cross-border. All rights reserved.</div>
  </footer>
</template>
