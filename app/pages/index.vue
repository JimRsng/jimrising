<script setup lang="ts">
useSeo({
  title: `${SITE.name} | Website`,
  name: `${SITE.name} | Website`,
  description: SITE.description
});
</script>

<template>
  <!-- HERO -->
  <HomeHero id="hero" />
  <!-- LEGADO -->
  <HomeLegado id="legado" />
  <!-- HORARIO -->
  <HomeHorario id="horario" />
  <!-- TOP CLIPS -->
  <HomeClips id="clips" />
</template>
