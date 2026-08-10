<script setup lang="ts">
const getStreamTime = (time: string) => {
  const referenceDate = new Date(`2000-01-01T${time}:00-06:00`); // Referenciado a la zona horaria de México (GMT-6)
  const horaLocal = new Intl.DateTimeFormat("es", {
    hour: "numeric",
    minute: "2-digit",
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    hour12: true
  }).format(new Date(referenceDate)).replace("a. m.", "AM").replace("p. m.", "PM");
  return horaLocal;
};

const weekDays = [
  { id: 1, name: "Lun", time: "17:00", description: "" },
  { id: 2, name: "Mar", time: "17:00", description: "" },
  { id: 3, name: "Mie", time: "17:00", description: "" },
  { id: 4, name: "Jue", time: "", description: "Descanso" },
  { id: 5, name: "Vie", time: "17:00", description: "" },
  { id: 6, name: "Sab", time: "17:00", description: "" },
  { id: 0, name: "Dom", time: "17:00", description: "" }
];

const now = ref<Date>(new Date());

onMounted(() => {
  now.value = new Date();
});
</script>

<template>
  <UPageHero
    class="relative flex items-center"
    :ui="{ container: 'py-12 sm:py-12 lg:py-20', title: 'tracking-wide text-start' }"
    as="section"
  >
    <template #title>
      <div>
        <h5 class="flex items-center text-sm font-normal gap-2 text-primary before:w-6 before:h-px before:bg-primary mb-4 uppercase">Horario semanal</h5>
        <h1 class="font-bebas uppercase">Pásate por el directo</h1>
      </div>
    </template>
    <template #description>
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
        <div v-for="day in weekDays" :key="day.id" class="flex flex-col items-center justify-center p-4 text-center border" :class="now.getDay() === day.id ? 'border-primary-500 bg-primary-700/20' : 'border-primary/30 hover:bg-primary-700/5'">
          <span class="text-sm uppercase font-bebas tracking-widest">{{ day.name }}</span>
          <span class="text-sm font-semibold text-white">{{ day.description || '&nbsp;' }}</span>
          <span class="text-sm uppercase font-bebas tracking-widest">{{ day.time ? getStreamTime(day.time) : '---' }}</span>
        </div>
      </div>
    </template>
  </UPageHero>
</template>
