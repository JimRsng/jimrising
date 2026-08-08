<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui";

const links: ButtonProps[] = [
  {
    label: "ÚNETE AL STEREAM",
    to: SITE.links.twitch.url,
    target: "_blank",
    ui: {
      base: "px-6 py-3 text-lg font-semibold bg-red-500 text-black"
    }
  }
];
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
  <UPageHero id="legado" orientation="horizontal" class="relative flex items-center bg-dark-2" :ui="{ container: 'py-12 sm:py-12 lg:py-20', title: 'tracking-wide' }">
    <div class="absolute left-[50%] translate-x-[-50%] -bottom-16 text-[16rem] text-nowrap pointer-events-none user-select-none text-red-500 opacity-3 font-bold font-bebas tracking-widest">STARCRAFT</div>
    <template #title>
      <h5 class="flex items-center text-sm font-normal gap-2 text-primary before:w-6 before:h-px before:bg-primary mb-4">CARRERA PROFESIONAL</h5>
      <h1 class="max-w-50 font-bebas">EL LEGADO</h1>
    </template>
    <template #description>
      <div class="flex flex-col gap-8">
        <div>
          Tras años representando a México en escenarios internacionales y compitiendo contra los mejores del mundo, mi carrera ha evolucionado. Hoy, mantengo esa misma chispa competitiva y pasión por transmitir en la Grieta del Invocador, compartiendo mi experiencia y el día a día en League of Legends con la comunidad que me vio crecer.
        </div>
        <div class="grid grid-cols-3 border border-primary/30">
          <div class="flex flex-col gap-2 items-center justify-center border-r border-primary/30 p-5">
            <span class="text-primary text-4xl font-bold font-bebas">12</span>
            <span class="text-sm text-center">AÑOS ACTIVO</span>
          </div>
          <div class="flex flex-col gap-2 items-center justify-center border-r border-primary/30 p-5">
            <span class="text-primary text-4xl font-bold font-bebas">ZERG</span>
            <span class="text-sm text-center">CLASE PRINCIPAL</span>
          </div>
          <div class="flex flex-col gap-2 items-center justify-center p-5">
            <span class="text-primary text-4xl font-bold font-bebas">$40K USD+</span>
            <span class="text-sm text-center">EN GANANCIAS</span>
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
</style>
