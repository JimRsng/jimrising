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
        <JimRisingLogo class="h-10 w-auto" />
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
  </div>
</template>
