<template>
  <div
      class="w-full h-full bg-[url('@/assets/img/bg-slides.jpg')] bg-cover rounded-[20px]  flex flex-col justify-between items-center p-5">

    <div class="flex items-center justify-between gap-10 w-full mb-6">
      <NuxtLink to="/podushki" class="bg-black text-white py-2.5 px-7 rounded-[20px] uppercase">Подушки
      </NuxtLink>
      <NuxtLink to="/postelnoe" class="bg-black text-white py-2.5 px-7 rounded-[20px] uppercase">постельное
      </NuxtLink>
      <NuxtLink to="/nabori" class="bg-black text-white py-2.5 px-7 rounded-[20px] uppercase">наборы
      </NuxtLink>
    </div>


    <Slides/>
    <img class="mt-6 w-full max-w-[416px]" src="@/assets/img/icons/logo.png" alt="logo">
  </div>
</template>

<script setup lang="ts">

import Slides from "@/components/Slides.vue";
</script>

<style scoped>

</style>