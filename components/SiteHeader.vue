<script setup lang="ts">
const route = useRoute()
const open = ref(false)
watch(() => route.path, () => open.value = false)
const links = [
  ['关于我们','/about'],['联营模式','/business-model'],['运营体系','/system'],
  ['主营平台','/platforms'],['合作行业','/industries'],['合作流程','/process']
]
</script>
<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0B1F33]/92 text-white backdrop-blur-xl">
    <div class="container-shell flex h-20 items-center justify-between">
      <NuxtLink to="/" class="flex min-w-0 items-center gap-2.5 sm:gap-3" aria-label="行星跨境首页">
        <span class="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#C9A86A]/60 text-[#D7BC83]">P</span>
        <span class="min-w-0"><b class="block whitespace-nowrap text-[14px] tracking-[.15em] sm:text-[15px] sm:tracking-[.18em]">行星跨境</b><small class="hidden text-[9px] tracking-[.22em] text-white/45 min-[370px]:block">PLANET CROSS-BORDER</small></span>
      </NuxtLink>
      <nav class="hidden items-center gap-5 xl:gap-7 lg:flex">
        <NuxtLink v-for="[label,to] in links" :key="to" :to="to" class="text-sm text-white/68 transition hover:text-[#D7BC83]">{{ label }}</NuxtLink>
        <NuxtLink to="/contact" class="rounded-full bg-[#C9A86A] px-5 py-2.5 text-sm font-semibold text-[#0B1F33]">合作咨询</NuxtLink>
      </nav>
      <button class="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/10 lg:hidden" :aria-expanded="open" :aria-label="open ? '关闭菜单' : '打开菜单'" @click="open=!open"><span class="text-xl">{{ open?'×':'☰' }}</span></button>
    </div>
    <nav v-if="open" class="max-h-[calc(100dvh-80px)] overflow-y-auto border-t border-white/10 bg-[#0B1F33] px-4 py-4 sm:px-5 lg:hidden">
      <NuxtLink to="/" class="block border-b border-white/5 py-3.5 text-sm text-white/75">首页</NuxtLink>
      <NuxtLink v-for="[label,to] in links" :key="to" :to="to" class="block border-b border-white/5 py-3.5 text-sm text-white/75">{{ label }}</NuxtLink>
      <NuxtLink to="/contact" class="mt-4 flex min-h-12 items-center justify-center rounded-full bg-[#C9A86A] text-sm font-semibold text-[#0B1F33]">合作咨询 →</NuxtLink>
    </nav>
  </header>
</template>
