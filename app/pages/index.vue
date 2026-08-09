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

const { data: clips } = await useFetch("/api/twitch/clips");
</script>

<template>
  <!-- HERO -->
  <UPageHero id="hero" :links="links" :description="SITE.description" orientation="horizontal" class="relative h-dvh flex items-center" :ui="{ wrapper: 'z-2', title: 'tracking-wide' }">
    <div class="hero-overlay absolute inset-0 z-1" />
    <template #title>
      <h5 class="flex items-center text-sm font-normal gap-2 text-primary before:w-6 before:h-px before:bg-primary mb-4 uppercase">Twitch Partner · Streamer de tiempo completo</h5>
      <h1 class="font-bebas tracking-normal sm:text-9xl max-w-100">{{ SITE.name }}</h1>
    </template>
  </UPageHero>
  <!-- LEGADO -->
  <UPageHero id="legado" orientation="horizontal" class="relative flex items-center bg-dark-2 overflow-hidden" :ui="{ container: 'py-12 sm:py-12 lg:py-20', title: 'tracking-wide' }">
    <div aria-hidden="true" role="presentation" class="absolute left-[50%] translate-x-[-50%] -bottom-16 text-[16rem] text-nowrap pointer-events-none user-select-none text-red-500 opacity-3 font-bold font-bebas tracking-widest">STARCRAFT</div>
    <template #title>
      <h5 class="flex items-center text-sm font-normal gap-2 text-primary before:w-6 before:h-px before:bg-primary mb-4 uppercase">Carrera profesional</h5>
      <h1 class="max-w-50 font-bebas uppercase">El Legado</h1>
    </template>
    <template #description>
      <div class="flex flex-col gap-8">
        <div>
          Tras años representando a México en escenarios internacionales y compitiendo contra los mejores del mundo, mi carrera ha evolucionado. Hoy, mantengo esa misma chispa competitiva y pasión por transmitir en la Grieta del Invocador, compartiendo mi experiencia y el día a día en League of Legends con la comunidad que me vio crecer.
        </div>
        <div class="grid grid-cols-3 border border-primary/30">
          <div class="flex flex-col gap-2 items-center justify-center border-r border-primary/30 p-5">
            <span class="text-primary text-4xl font-bold font-bebas">12</span>
            <span class="text-sm text-center uppercase">Años activo</span>
          </div>
          <div class="flex flex-col gap-2 items-center justify-center border-r border-primary/30 p-5">
            <span class="text-primary text-4xl font-bold font-bebas uppercase">Zerg</span>
            <span class="text-sm text-center uppercase">Clase principal</span>
          </div>
          <div class="flex flex-col gap-2 items-center justify-center p-5">
            <span class="text-primary text-4xl font-bold font-bebas">$40K USD+</span>
            <span class="text-sm text-center uppercase">En ganancias</span>
          </div>
        </div>
      </div>
    </template>
    <!-- Trophies -->
    <div class="flex gap-4 flex-col">
      <template v-for="trophy of SITE.trophies" :key="trophy.title">
        <div class="border border-yellow-500/30 p-5 flex justify-between items-center gap-4 bg-zinc-900">
          <div class="flex gap-4 justify-center items-center">
            <Icon :name="trophy.icon" size="1.8rem" class="text-yellow-400" />
            <div class="flex flex-col gap-1">
              <div class="text-base font-semibold">{{ trophy.title }}</div>
              <div class="text-xs uppercase text-neutral-400">{{ trophy.location }}</div>
            </div>
          </div>
          <div class="font-bold text-yellow-400">{{ trophy.date }}</div>
        </div>
      </template>
    </div>
  </UPageHero>
  <!-- HORARIO -->
  <UPageHero id="horario" class="relative flex items-center bg-dark" :ui="{ container: 'py-12 sm:py-12 lg:py-20', title: 'tracking-wide text-start' }">
    <template #title>
      <h5 class="flex items-center text-sm font-normal gap-2 text-primary before:w-6 before:h-px before:bg-primary mb-4 uppercase">Horario semanal</h5>
      <h1 class="font-bebas uppercase">Pásate por el directo</h1>
    </template>
    <template #description />
  </UPageHero>
  <!-- TOP CLIPS -->
  <UPageHero id="clips" class="relative flex items-center bg-dark-2" :ui="{ container: 'py-12 sm:py-12 lg:py-20', title: 'tracking-wide text-start' }">
    <template #title>
      <h5 class="flex items-center text-sm font-normal gap-2 text-primary before:w-6 before:h-px before:bg-primary mb-4 uppercase">Highlights</h5>
      <h1 class="font-bebas uppercase">Top clips</h1>
    </template>
    <template #description>
      <UCarousel
        v-slot="{ item }"
        :items="clips"
        arrows
        :ui="{
          item: 'basis-3/4 lg:basis-1/3',
          prev: 'sm:start-8 z-2 rounded-sm bg-dark',
          next: 'sm:end-8 z-2 rounded-sm bg-dark',
          viewport: 'pb-2',
        }"
      >
        <NuxtLink class="block relative group overflow-hidden border border-primary/0 hover:border-primary transition-all duration-300 hover:shadow-md shadow-primary/50" :to="item.url" target="_blank">
          <img :src="item.thumbnailUrl" alt="" class="w-full rounded-none group-hover:scale-105 group-hover:opacity-75 transition-all duration-300">
          <div class="absolute bottom-0 left-0 text-start z-2">
            <div class="p-4 flex flex-col justify-center gap-0">
              <div class="font-bebas text-primary text-sm tracking-widest font-normal">
                {{ item.game }}
              </div>
              <div class="font-semibold text-sm text-white">
                {{ item.title }}
              </div>
              <div class="text-sm tracking-normal font-normal flex gap-3">
                <div class="whitespace-nowrap"><span class="font-bebas tracking-widest">{{ new Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 1 }).format(item.views) }}</span> views</div>
                <div class="whitespace-nowrap"><span class="font-bebas tracking-widest">{{ new Date(item.createdAt).toLocaleDateString("es-MX", { month: "short", year: "numeric", day: "numeric" }) }}</span></div>
                <div class="whitespace-nowrap"><span class="font-bebas tracking-widest">by:</span> {{ item.createdBy }}</div>
              </div>
            </div>
          </div>
          <div class="clips-overlay absolute inset-0 z-1" />
          <div class="absolute z-2 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover:opacity-100 opacity-0 transition-all duration-300 text-white">
            <Icon name="ph:play-fill" size="2rem" class="" />
          </div>
        </NuxtLink>
      </UCarousel>
    </template>
  </UPageHero>
</template>

<style scoped>
#hero {
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  background-image: url(/images/bg-1.png);
}

.hero-overlay {
  background: linear-gradient(to right, rgba(8, 12, 16, 0.92) 0%, rgba(8, 12, 16, 0.75) 45%, rgba(8, 12, 16, 0.15) 75%, rgba(8, 12, 16, 0.0) 100%);
}

.clips-overlay {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.96) 5%, rgba(0, 0, 0, 0.0) 100%);
}
</style>
