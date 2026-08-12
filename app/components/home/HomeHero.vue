<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui";

const { data: followers } = await useFetch("/api/twitch/followers", {
  key: "twitch:followers",
  getCachedData: (key, nuxtApp) => nuxtApp.payload.data[key]
});

const links: ButtonProps[] = [
  {
    label: "Únete al stream",
    to: SITE.links.twitch.url,
    target: "_blank",
    ui: {
      base: "px-6 py-2 text-lg font-semibold bg-primary text-black shadow shadow-xl hover:bg-primary/90 hover:shadow-red-500/30 uppercase scale-on-hover"
    }
  }
];
</script>

<template>
  <UPageHero
    orientation="horizontal"
    class="relative h-dvh flex items-center"
    :ui="{ wrapper: 'z-2', title: 'tracking-wide', container: 'self-end sm:self-center' }"
    :style="{
      backgroundSize: 'cover',
      backgroundPosition: 'center top',
      backgroundRepeat: 'no-repeat',
      backgroundImage: 'url(/images/backgrounds/hero.png)',
    }"
    as="section"
  >
    <div
      class="absolute inset-0 z-1 pointer-events-none"
      :style="{
        background: 'linear-gradient(to right, rgba(8, 12, 16, 0.92) 0%, rgba(8, 12, 16, 0.75) 45%, rgba(8, 12, 16, 0.15) 75%, rgba(8, 12, 16, 0.0) 100%)',
      }"
    />
    <div
      class="absolute inset-0 z-1 pointer-events-none"
      :style="{
        backgroundSize: '60px 60px',
        backgroundImage: 'linear-gradient(rgba(255,26,26,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,26,26,0.05) 1px, transparent 1px)',
        mask: 'radial-gradient(ellipse at 30% 50%, black 20%, transparent 65%)',
      }"
    />
    <template #title>
      <div>
        <h5 data-aos="fade-up" data-aos-duration="400" class="flex items-center text-sm font-normal gap-2 text-primary before:w-6 before:h-px before:bg-primary mb-4 uppercase">Twitch Partner · Streamer de tiempo completo</h5>
        <h1 data-aos="fade-up" data-aos-duration="800" class="font-bebas tracking-normal sm:text-9xl max-w-100">{{ SITE.name }}</h1>
      </div>
    </template>
    <template #description>
      <div data-aos="fade-up" data-aos-duration="1200">
        {{ SITE.description }}
      </div>
    </template>
    <template #links>
      <div data-aos="fade-up" data-aos-duration="1600" class="flex flex-wrap gap-5">
        <UButton v-for="link in links" :key="link.label" v-bind="link" />
        <UFieldGroup>
          <UBadge icon="simple-icons:twitch" class="bg-purple-500 text-white px-3 py-2 rounded-none" :ui="{ leadingIcon: 'h-5 w-5' }" />
          <UBadge v-if="followers?.count" color="neutral" class="px-4 py-2 text-base rounded-none" :label="new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 }).format(followers.count) + ' followers'" />
        </UFieldGroup>
      </div>
    </template>
  </UPageHero>
</template>
