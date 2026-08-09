<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
// import { useTimeAgoIntl } from "@vueuse/core";

const pages: NavigationMenuItem[] = [
  {
    label: "INICIO",
    to: "/"
  },
  {
    label: "LEGADO",
    to: "#legado"
  },
  {
    label: "HORARIO",
    to: "#horario"
  },
  {
    label: "CLIPS",
    to: "#clips"
  },
  {
    label: "REDES",
    to: "#redes"
  }
];

const externalPages: NavigationMenuItem[] = [
  {
    label: "JIMTRACKER",
    to: "https://jimtracker.com",
    target: "_blank"
  }
];

/*
const config = useRuntimeConfig();
const buildInfo = config.public.buildInfo;
const timeAgo = useTimeAgoIntl(buildInfo.time, {
  locale: "es",
  relativeTimeFormatOptions: {
    style: "long"
  }
});
*/
</script>

<template>
  <div id="layout">
    <UHeader>
      <template #title>
        <img :src="SITE.logo" class="h-10 w-auto" alt="JimRising">
      </template>
      <UNavigationMenu :items="pages" variant="link" :highlight="false" class="w-full justify-center" />
      <template #right>
        <UNavigationMenu :items="externalPages" variant="link" :highlight="false" class="w-full justify-center" />
      </template>
      <template #body>
        <UNavigationMenu :items="pages" variant="link" orientation="vertical" :highlight="false" class="w-full justify-center" />
      </template>
    </UHeader>
    <slot />
    <!-- FOOTER -->
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
              base: 'p-3 ring-primary/30 hover:ring-primary hover:text-default text-muted',
            }"
          />
        </div>
        <p class="text-muted text-xs uppercase tracking-widest">© {{ new Date().getFullYear() }} JimRising · All rights reserved</p>
      </div>
    </UFooter>
  </div>
</template>
