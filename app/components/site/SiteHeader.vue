<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const pages: NavigationMenuItem[] = [
  {
    label: "Inicio",
    to: "/"
  },
  {
    label: "Legado",
    to: "#legado"
  },
  {
    label: "Horario",
    to: "#horario"
  },
  {
    label: "Clips",
    to: "#clips"
  },
  {
    label: "Redes",
    to: "#redes"
  }
];

const externalPages: NavigationMenuItem[] = [
  {
    label: "JimTracker",
    to: "https://jimtracker.com",
    target: "_blank"
  },
  {
    label: "Comunidad",
    to: "https://comunidad.jimtracker.com",
    target: "_blank"
  }
];
</script>

<template>
  <UHeader>
    <template #title>
      <img :src="SITE.logo" class="h-10 w-auto" alt="JimRising">
    </template>
    <UNavigationMenu :items="pages" variant="link" :highlight="false" class="w-full justify-center" />
    <template #right>
      <UNavigationMenu :items="externalPages" variant="link" :highlight="false" class="w-full justify-center" :ui="{ linkLabel: 'uppercase' }" />
    </template>
    <template #body>
      <UNavigationMenu :items="pages" variant="link" orientation="vertical" :highlight="false" class="w-full justify-center" :ui="{ linkLabel: 'uppercase' }" />
    </template>
  </UHeader>
</template>
