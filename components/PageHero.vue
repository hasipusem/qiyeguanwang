<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  desc: string
  image?: string
  imageAlt?: string
  imageLabel?: string
}>()
</script>

<template>
  <section class="relative overflow-hidden bg-[#0B1F33] pb-16 pt-28 text-white sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36">
    <div class="absolute right-[-35%] top-10 h-72 w-72 rounded-full border border-[#C9A86A]/20 sm:right-[-10%] sm:h-96 sm:w-96"></div>
    <div class="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] [background-size:72px_72px]"></div>
    <div class="container-shell relative grid items-center gap-10 lg:grid-cols-[1.02fr_.98fr] lg:gap-16">
      <div>
        <div class="eyebrow text-[#D1B477]">{{ eyebrow }}</div>
        <h1 class="mt-5 max-w-4xl text-[clamp(36px,5.2vw,68px)] font-semibold leading-[1.12] tracking-[-.05em] sm:mt-6">{{ title }}</h1>
        <p class="mt-5 max-w-2xl text-[15px] leading-7 text-white/55 sm:mt-7 sm:text-base sm:leading-8">{{ desc }}</p>
      </div>

      <figure v-if="image" class="relative overflow-hidden rounded-[28px] border border-white/12 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,.28)]">
        <img
          :src="image"
          :alt="imageAlt || title"
          class="aspect-[4/3] w-full object-cover sm:aspect-[16/10]"
          fetchpriority="high"
        />
        <div class="absolute inset-0 bg-[linear-gradient(0deg,rgba(7,23,37,.62)_0%,transparent_48%)]"></div>
        <figcaption v-if="imageLabel" class="absolute bottom-4 left-4 rounded-full border border-white/15 bg-[#071725]/75 px-4 py-2 text-[10px] tracking-[.16em] text-white/75 backdrop-blur-md sm:bottom-5 sm:left-5">
          {{ imageLabel }}
        </figcaption>
      </figure>
    </div>
  </section>
</template>
