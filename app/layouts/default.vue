<script setup lang="ts">
// import { useTimeAgoIntl } from "@vueuse/core";

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
    <SiteHeader />
    <UMain>
      <slot />
    </UMain>
    <!-- FOOTER -->
    <LazySiteFooter hydrate-on-visible />
  </div>
</template>
