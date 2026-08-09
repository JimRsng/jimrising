<template>
  <UFooter :ui="{ top: 'p-0!', center: 'm-0!', left: 'm-0!' }">
    <template #top>
      <USeparator
        :ui="{ border: 'border-primary/30' }"
        :avatar="{
          src: SITE.logo,
          alt: 'JimRising',
          size: 'sm',
        }"
      />
    </template>
    <div class="flex flex-col items-center justify-center gap-4 py-6">
      <div class="font-bold text-xl tracking-widest">
        <span><span class="text-primary">JIM</span>RISING</span>
      </div>
      <div class="lg:flex-1 flex items-center justify-center lg:justify-end gap-x-1.5">
        <UButton
          v-for="link of SITE.links"
          :key="link.url"
          :icon="link.icon"
          color="primary"
          variant="outline"
          :to="link.url"
          target="_blank"
          :ui="{
            base: 'p-3 ring-primary/30 hover:ring-primary hover:text-default text-dimmed',
          }"
        />
      </div>
      <p class="text-dimmed text-xs uppercase tracking-widest">© {{ new Date().getFullYear() }} JimRising · All rights reserved</p>
    </div>
  </UFooter>
</template>
