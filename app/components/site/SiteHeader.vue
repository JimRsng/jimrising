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
    to: "#footer"
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

onMounted(() => {
  const sections = document.querySelectorAll<HTMLElement>("section[id]");
  const navLinks = document.querySelectorAll<HTMLAnchorElement>("nav div[data-slot='center'] a");
  addEventListener("scroll", () => {
    let current = "";
    for (const s of sections) {
      if (window.scrollY >= s.offsetTop - 200) current = s.id;
    }
    for (const a of navLinks) {
      const anchor = a.getAttribute("href")?.substring(1);
      a.style.color = !anchor && current === "hero" ? "var(--ui-primary)" : anchor === current ? "var(--ui-primary)" : "var(--ui-text-muted)";
    }
  });
});
</script>

<template>
  <UHeader>
    <template #title>
      <img :src="SITE.logo" class="h-10 w-auto" alt="JimRising">
    </template>
    <UNavigationMenu
      :items="pages"
      variant="link"
      :highlight="false"
      class="w-full justify-center"
    />
    <template #right>
      <UNavigationMenu
        :items="externalPages"
        variant="link"
        :highlight="false"
        class="w-full justify-center"
        :ui="{ linkLabel: 'uppercase' }"
      />
    </template>
    <template #body>
      <UNavigationMenu
        :items="pages"
        variant="link"
        orientation="vertical"
        :highlight="false"
        class="w-full justify-center"
        :ui="{ linkLabel: 'uppercase' }"
      />
    </template>
  </UHeader>
</template>
