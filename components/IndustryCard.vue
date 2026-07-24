<script setup lang="ts">
defineProps<{
  item: { name: string; en: string; products: string[]; value: string; fit: string }
}>()
</script>

<template>
  <article class="card group p-7 transition hover:-translate-y-1">
    <div class="flex items-start justify-between">
      <span class="text-[11px] tracking-[.2em] text-[#A07D43]">{{ item.en }}</span>
      <span class="text-slate-300 transition group-hover:text-[#C9A86A]">-&gt;</span>
    </div>
    <h3 class="mt-7 text-2xl font-semibold text-[#0B1F33]">{{ item.name }}</h3>
    <div class="mt-4 flex flex-wrap gap-2">
      <span v-for="p in item.products" :key="p" class="rounded-full bg-[#F4F5F7] px-3 py-1 text-xs text-slate-500">{{ p }}</span>
    </div>
    <p class="mt-6 text-sm leading-7 text-slate-600">{{ item.value }}</p>
    <div class="mt-6 border-t border-slate-100 pt-5 text-xs leading-6 text-slate-400">
      <b class="text-slate-600">适合企业：</b>{{ item.fit }}
    </div>
  </article>
</template>
