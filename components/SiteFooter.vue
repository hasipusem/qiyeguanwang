<template>
  <footer id="footer-contact" class="bg-[#071725] py-12 text-white sm:py-16">
    <div class="container-shell">
      <div class="grid gap-10 border-b border-white/10 pb-10 sm:grid-cols-2 md:grid-cols-[1.25fr_.75fr_1.15fr_.8fr] md:gap-8 sm:pb-12">
        <div>
          <div class="mb-5 text-lg font-semibold tracking-[.18em]">行星跨境</div>
          <p class="max-w-sm text-sm leading-7 text-white/50">
            连接中国优秀制造能力与全球消费市场，共同打造具有国际竞争力的品牌。
          </p>
          <NuxtLink to="/process#consultation" class="mt-6 inline-flex items-center text-sm font-medium text-[#D6B97E] transition hover:text-[#E4CA95]">
            合作咨询 →
          </NuxtLink>
        </div>

        <div>
          <div class="mb-4 text-xs tracking-[.2em] text-[#C9A86A]">NAVIGATION</div>
          <NuxtLink to="/business-model" class="block py-1.5 text-sm text-white/55 transition hover:text-white">品牌联营模式</NuxtLink>
          <NuxtLink to="/system" class="block py-1.5 text-sm text-white/55 transition hover:text-white">全球运营体系</NuxtLink>
          <NuxtLink to="/platforms" class="block py-1.5 text-sm text-white/55 transition hover:text-white">主营平台</NuxtLink>
          <NuxtLink to="/industries" class="block py-1.5 text-sm text-white/55 transition hover:text-white">合作行业</NuxtLink>
          <NuxtLink to="/cases" class="block py-1.5 text-sm text-white/55 transition hover:text-white">成功案例</NuxtLink>
          <NuxtLink to="/process" class="block py-1.5 text-sm text-white/55 transition hover:text-white">合作流程</NuxtLink>
        </div>

        <div>
          <div class="mb-4 text-xs tracking-[.2em] text-[#C9A86A]">联系我们</div>
          <dl class="space-y-4 text-sm">
            <div>
              <dt class="text-xs text-white/30">合作邮箱</dt>
              <dd class="mt-1.5 break-all">
                <a href="mailto:hasipusem@gmail.com" class="text-white/65 transition hover:text-[#D6B97E]">hasipusem@gmail.com</a>
              </dd>
            </div>
            <div>
              <dt class="text-xs text-white/30">联系电话</dt>
              <dd class="mt-1.5 text-white/45">待补充</dd>
            </div>
            <div>
              <dt class="text-xs text-white/30">公司地址</dt>
              <dd class="mt-1.5 leading-6 text-white/45">待补充</dd>
            </div>
          </dl>
        </div>

        <div>
          <div class="mb-4 text-xs tracking-[.2em] text-[#C9A86A]">企业微信</div>
          <div class="grid h-32 w-32 place-items-center rounded-xl border border-dashed border-white/20 bg-white/[.04] p-3 text-center">
            <div>
              <div class="mx-auto grid h-8 w-8 grid-cols-3 gap-0.5 opacity-40" aria-hidden="true">
                <span v-for="n in 9" :key="n" class="bg-white" :class="{ 'opacity-25': [2, 4, 6, 8].includes(n) }" />
              </div>
              <p class="mt-2 text-[10px] leading-4 text-white/35">二维码待上传</p>
            </div>
          </div>
          <p class="mt-3 text-xs text-white/30">添加企业微信，咨询合作详情</p>
        </div>
      </div>

      <div class="flex flex-col gap-2 pt-6 text-[11px] leading-6 text-white/30 sm:flex-row sm:items-center sm:justify-between sm:text-xs">
        <span>© {{ new Date().getFullYear() }} Planet Cross-border. All rights reserved.</span>
        <span>全球品牌联营 · 中国制造全球化</span>
      </div>
    </div>
  </footer>
</template>
