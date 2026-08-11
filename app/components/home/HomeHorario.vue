<script setup lang="ts">
// Times are in `America/Mexico_City` timezone
const weekDays = [
  { id: 1, name: "Lun", time: "17:00", description: "Stream en Twitch" },
  { id: 2, name: "Mar", time: "17:00", description: "Stream en Twitch" },
  { id: 3, name: "Mie", time: "17:00", description: "Stream en Twitch" },
  { id: 4, name: "Jue", time: "", description: "Descanso" },
  { id: 5, name: "Vie", time: "17:00", description: "Stream en Twitch, Día de comunidad" },
  { id: 6, name: "Sab", time: "17:00", description: "Stream en Twitch, Co-stream LCS" },
  { id: 0, name: "Dom", time: "17:00", description: "Stream en Twitch, Co-stream LCS" }
];

const now = ref<Date>();

onMounted(() => {
  now.value = new Date();
});

const getStreamTime = (time: string) => {
  const now = new Date();
  const [hours, minutes] = time.split(":");

  const utcDate = new Date(Date.UTC(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    Number(hours),
    Number(minutes)
  ));

  const [mxHour, mxMinute] = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Mexico_City",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).format(utcDate).split(":");

  const offsetMinutes = Number(hours) * 60 + Number(minutes) - (Number(mxHour) * 60 + Number(mxMinute));

  return new Date(utcDate.getTime() + offsetMinutes * 60000);
};
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
        <div v-for="day in weekDays" :key="day.id" class="flex flex-col items-center justify-center p-4 text-center border" :class="now?.getDay() === day.id ? 'border-primary-500 bg-primary-700/20' : 'border-primary/30 hover:bg-primary-700/5'">
          <span class="text-sm uppercase font-bebas tracking-widest">{{ day.name }}</span>
          <span class="text-sm font-semibold text-white">{{ day.description || '&nbsp;' }}</span>
          <span class="text-sm uppercase font-bebas tracking-widest">
            <NuxtTime
              v-if="day.time"
              locale="en-US"
              :datetime="getStreamTime(day.time)"
              hour="numeric"
              minute="2-digit"
              :time-zone="Intl.DateTimeFormat().resolvedOptions().timeZone"
              hour12
            />
            <span v-else>---</span>
          </span>
        </div>
      </div>
    </template>
  </UPageHero>
</template>
