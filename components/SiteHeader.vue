<script setup lang="ts">
const route = useRoute()
const open = ref(false)
watch(() => route.path, () => open.value = false)
const links = [
  ['关于我们','/about'],['联营模式','/business-model'],['运营体系','/system'],
  ['合作行业','/industries'],['合作流程','/process']
]
</script>
<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0B1F33]/92 text-white backdrop-blur-xl">
    <div class="container-shell flex h-20 items-center justify-between">
      <NuxtLink to="/" class="flex items-center gap-3" aria-label="行星跨境首页">
        <span class="grid h-9 w-9 place-items-center rounded-full border border-[#C9A86A]/60 text-[#D7BC83]">P</span>
        <span><b class="block text-[15px] tracking-[.18em]">行星跨境</b><small class="text-[9px] tracking-[.22em] text-white/45">PLANET CROSS-BORDER</small></span>
      </NuxtLink>
      <nav class="hidden items-center gap-7 lg:flex">
        <NuxtLink v-for="[label,to] in links" :key="to" :to="to" class="text-sm text-white/68 transition hover:text-[#D7BC83]">{{ label }}</NuxtLink>
        <NuxtLink to="/contact" class="rounded-full bg-[#C9A86A] px-5 py-2.5 text-sm font-semibold text-[#0B1F33]">合作咨询</NuxtLink>
      </nav>
      <button class="grid h-10 w-10 place-items-center lg:hidden" aria-label="打开菜单" @click="open=!open"><span class="text-xl">{{ open?'×':'☰' }}</span></button>
    </div>
    <nav v-if="open" class="container-shell border-t border-white/10 py-5 lg:hidden">
      <NuxtLink v-for="[label,to] in links" :key="to" :to="to" class="block py-3 text-sm text-white/75">{{ label }}</NuxtLink>
      <NuxtLink to="/contact" class="mt-2 block text-[#D7BC83]">合作咨询 →</NuxtLink>
    </nav>
  </header>
</template>
