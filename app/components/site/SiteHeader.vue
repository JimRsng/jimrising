<script setup lang="ts">
const { data: navbar } = await useFetch("/api/navbar");

if (!navbar.value) {
  throw createError({
    statusCode: 500,
    message: "Failed to fetch navbar data",
    fatal: true
  });
}

const { pages, bodyPages } = navbar.value;

let current = "hero";

const setNavLinksColor = (navLinks: NodeListOf<HTMLAnchorElement>) => {
  for (const a of navLinks) {
    const anchor = a.getAttribute("href")?.match(/#(\w+)/)?.[1];
    a.style.color = !anchor && current === "hero" ? "var(--ui-primary)" : anchor === current ? "var(--ui-primary)" : "var(--ui-text-muted)";
  }
};

onMounted(() => {
  const sections = document.querySelectorAll<HTMLElement>("section[id]");
  const navLinks = document.querySelectorAll<HTMLAnchorElement>("div[data-slot=center] #nav-main a");
  const limit = Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight
  );

  const onScroll = () => {
    for (const s of sections) {
      if (scrollY >= limit - innerHeight) {
        current = "redes";
        break;
      }
      if (scrollY >= s.offsetTop - 200) current = s.id;
    }
    setNavLinksColor(navLinks);
  };

  addEventListener("scroll", onScroll);

  onUnmounted(() => {
    removeEventListener("scroll", onScroll);
  });
});

const updateBodyNavLinksColor = () => {
  nextTick(() => {
    const navLinks = document.querySelectorAll<HTMLAnchorElement>("div[data-slot=body] #nav-body-main a");
    setNavLinksColor(navLinks);
  });
};
</script>

<template>
  <UHeader @update:open="updateBodyNavLinksColor">
    <template #title>
      <div class="flex items-center gap-2">
        <img :src="SITE.logo" class="h-10 w-auto" alt="JimRising">
        <h1 class="text-lg font-bold uppercase">JimRising</h1>
      </div>
    </template>
    <UNavigationMenu
      id="nav-main"
      :items="pages.main"
      variant="link"
      :highlight="false"
      class="w-full justify-center"
      :ui="{ linkLabel: 'uppercase', item: 'p-0' }"
    />
    <USeparator orientation="vertical" class="h-8 mx-4" :ui="{ border: 'border-primary/30' }" />
    <UNavigationMenu
      :items="pages.apps"
      variant="link"
      :highlight="false"
      class="w-full justify-center"
      :ui="{ linkLabel: 'uppercase', item: 'p-0' }"
    />
    <template #right>
      <!-- TODO -->
    </template>
    <template #body>
      <UNavigationMenu
        id="nav-body-main"
        :items="bodyPages.main"
        variant="link"
        orientation="vertical"
        :highlight="false"
        class="w-full justify-center"
        :ui="{ linkLabel: 'uppercase' }"
      />
      <USeparator orientation="horizontal" class="my-4" :ui="{ border: 'border-primary/30' }" />
      <UNavigationMenu
        :items="bodyPages.apps"
        variant="link"
        orientation="vertical"
        :highlight="false"
        class="w-full justify-center"
        :ui="{ linkLabel: 'uppercase' }"
      />
    </template>
  </UHeader>
</template>
