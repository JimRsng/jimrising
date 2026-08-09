<template>
  <UPageHero orientation="horizontal" class="relative flex items-center bg-dark-2 overflow-hidden" :ui="{ container: 'py-12 sm:py-12 lg:py-20', title: 'tracking-wide' }">
    <div aria-hidden="true" role="presentation" class="absolute left-[50%] translate-x-[-50%] -bottom-16 text-[16rem] text-nowrap pointer-events-none user-select-none text-red-500 opacity-3 font-bold font-bebas tracking-widest">STARCRAFT</div>
    <template #title>
      <div>
        <h5 class="flex items-center text-sm font-normal gap-2 text-primary before:w-6 before:h-px before:bg-primary mb-4 uppercase">Carrera profesional</h5>
        <h1 class="max-w-50 font-bebas uppercase">El Legado</h1>
      </div>
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
</template>
