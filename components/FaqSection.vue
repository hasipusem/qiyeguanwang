<script setup lang="ts">
import type { FaqItem } from '~/data/faqs'

const props = defineProps<{
  items: FaqItem[]
  categories: readonly string[]
}>()

const activeCategory = ref('全部')
const filteredItems = computed(() => activeCategory.value === '全部'
  ? props.items
  : props.items.filter(item => item.category === activeCategory.value)
)
</script>

<template>
  <div>
    <div class="flex gap-2 overflow-x-auto pb-3">
      <button
        v-for="category in categories"
        :key="category"
        type="button"
        class="shrink-0 rounded-full border px-4 py-2 text-sm transition"
        :class="activeCategory === category ? 'border-[#C9A86A] bg-[#C9A86A] text-[#0B1F33]' : 'border-slate-200 bg-white text-slate-500 hover:border-slate-300'"
        @click="activeCategory = category"
      >
        {{ category }}
      </button>
    </div>

    <div class="mt-7 divide-y divide-slate-200 border-y border-slate-200">
      <details v-for="item in filteredItems" :key="item.question" class="group py-1">
        <summary class="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left font-medium text-[#0B1F33] sm:py-6 sm:text-lg">
          <span>{{ item.question }}</span>
          <span class="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-slate-200 text-lg font-light text-[#A07D43] transition group-open:rotate-45">+</span>
        </summary>
        <p class="max-w-4xl pb-6 pr-10 text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">{{ item.answer }}</p>
      </details>
    </div>
  </div>
</template>
