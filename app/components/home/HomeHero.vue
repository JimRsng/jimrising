<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui";

const links: ButtonProps[] = [
  {
    label: "Únete al stream",
    to: SITE.links.twitch.url,
    target: "_blank",
    ui: {
      base: "px-6 py-3 text-lg font-semibold bg-primary text-black shadow shadow-xl hover:bg-primary/90 hover:shadow-red-500/30 uppercase"
    }
  }
];
</script>

<template>
  <UPageHero
    :links="links"
    :description="SITE.description"
    orientation="horizontal"
    class="relative h-dvh flex items-center"
    :ui="{ wrapper: 'z-2', title: 'tracking-wide' }"
    :style="{
      backgroundSize: 'cover',
      backgroundPosition: 'center top',
      backgroundRepeat: 'no-repeat',
      backgroundImage: 'url(/images/bg-1.png)',
    }"
  >
    <div
      class="absolute inset-0 z-1"
      :style="{
        background: 'linear-gradient(to right, rgba(8, 12, 16, 0.92) 0%, rgba(8, 12, 16, 0.75) 45%, rgba(8, 12, 16, 0.15) 75%, rgba(8, 12, 16, 0.0) 100%)',
      }"
    />
    <template #title>
      <div>
        <h5 class="flex items-center text-sm font-normal gap-2 text-primary before:w-6 before:h-px before:bg-primary mb-4 uppercase">Twitch Partner · Streamer de tiempo completo</h5>
        <h1 class="font-bebas tracking-normal sm:text-9xl max-w-100">{{ SITE.name }}</h1>
      </div>
    </template>
  </UPageHero>
</template>
