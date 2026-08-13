<script setup lang="ts">
const { data: clips } = await useFetch("/api/twitch/clips", {
  key: "twitch:clips",
  getCachedData: (key, nuxtApp) => nuxtApp.payload.data[key]
});

const activeIndex = ref(0);
</script>

<template>
  <UPageHero
    class="relative flex items-center bg-elevated"
    :ui="{ container: 'py-12 sm:py-12 lg:py-20', title: 'tracking-wide text-start', wrapper: 'z-2' }"
    as="section"
  >
    <div
      class="absolute inset-0 z-1 pointer-events-none"
      :style="{
        backgroundSize: '60px 60px',
        backgroundImage: 'linear-gradient(rgba(255,26,26,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,26,26,0.2) 1px, transparent 1px)',
        mask: 'linear-gradient(180deg, transparent 0%, black 40%, transparent 100%)',
      }"
    />
    <template #title>
      <div>
        <h5 class="flex items-center text-sm font-normal gap-2 text-primary before:w-6 before:h-px before:bg-primary mb-4 uppercase">Highlights</h5>
        <h1 class="font-bebas uppercase">Top clips</h1>
      </div>
    </template>
    <template #description>
      <UCarousel
        v-slot="{ item, index }"
        :items="clips"
        arrows
        class="z-2"
        loop
        dots
        :ui="{
          item: 'basis-3/4 lg:basis-1/3',
          prev: 'sm:start-8 z-2 rounded-sm bg-default',
          next: 'sm:end-8 z-2 rounded-sm bg-default',
          viewport: 'pb-2',
        }"
        @select="activeIndex = $event"
      >
        <div class="bg-elevated">
          <NuxtLink class="block relative group overflow-hidden border border-primary/0 hover:border-primary transition-all duration-300 hover:shadow-md shadow-primary/50" :class="{ 'pointer-events-none lg:pointer-events-auto opacity-40 lg:opacity-100': index !== activeIndex }" :to="item.url" target="_blank">
            <img :src="item.thumbnailUrl" :alt="item.title" class="w-full rounded-none group-hover:scale-105 group-hover:opacity-75 transition-all duration-300">
            <div class="absolute bottom-0 left-0 text-start z-2">
              <div class="p-4 flex flex-col justify-center gap-0 select-none">
                <div class="font-bebas text-primary text-sm tracking-widest font-normal">
                  {{ item.game }}
                </div>
                <div class="font-semibold text-sm text-white">
                  {{ item.title }}
                </div>
                <div class="text-sm tracking-normal font-normal flex gap-3">
                  <div class="whitespace-nowrap">
                    <span class="font-bebas tracking-widest">
                      <span>{{ new Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 1 }).format(item.views) }} views</span>
                    </span>
                  </div>
                  <div class="whitespace-nowrap">
                    <span class="font-bebas tracking-widest">
                      <span>
                        <NuxtTime :datetime="item.createdAt" month="short" year="numeric" day="numeric" locale="es-MX" />
                      </span>
                    </span>
                  </div>
                  <div class="whitespace-nowrap"><span class="font-bebas tracking-widest">by:</span> {{ item.createdBy }}</div>
                </div>
              </div>
            </div>
            <div
              class="clips-overlay absolute inset-0 z-1"
              :style="{
                background: 'linear-gradient(to top, rgba(0, 0, 0, 0.96) 5%, rgba(0, 0, 0, 0.0) 100%)',
              }"
            />
            <div class="absolute z-2 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover:opacity-100 opacity-0 transition-all duration-300 text-white">
              <Icon name="ph:play-fill" size="2rem" class="" />
            </div>
          </NuxtLink>
        </div>
      </UCarousel>
    </template>
  </UPageHero>
</template>
