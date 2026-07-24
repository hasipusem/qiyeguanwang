<script setup lang="ts">
import { markets } from '~/data/platforms'
</script>
<template>
  <div class="relative aspect-[1.7]">
    <div class="absolute inset-[10%] rounded-[50%] border border-white/15 shadow-[0_0_90px_rgba(201,168,106,.12)]"></div>
    <div class="absolute inset-[18%_10%] rounded-[50%] border border-[#C9A86A]/25"></div>
    <div class="absolute left-[14%] right-[12%] top-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    <div v-for="m in markets" :key="m.name" class="absolute" :style="{left:m.x,top:m.y}">
      <span class="absolute -inset-2 animate-ping rounded-full bg-[#C9A86A]/20"></span><span class="relative block h-2 w-2 rounded-full bg-[#D7BC83] shadow-[0_0_16px_#C9A86A]"></span><small class="absolute left-4 top-[-5px] whitespace-nowrap text-[10px] tracking-widest text-white/55">{{ m.name }}</small>
    </div>
  </div>
</template>
