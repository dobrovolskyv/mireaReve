<template>
  <div class="w-full h-full md:h-[495px] bg-gray-300 rounded-[20px] p-5 text-center flex flex-col
            justify-between items-center relative">
    <div class="flex items-center justify-between w-full ">
      <div class="flex items-center justify-between gap-6">
        <img src="@/assets/img/icons/logo_mini.png" alt="mirea reve">
        <img  class="cursor-pointer" src="@/assets/img/icons/search.png" alt="poisk">
      </div>
      <NuxtLink to="/novinki" class="bg-black text-white py-2.5 px-7 rounded-[20px] uppercase">Новинки</NuxtLink>
      <div class="circle__white absolute -top-12 left-[44%] bg-white rounded-full w-16 h-16 xl:w-24 xl:h-24"></div>
    </div>
    <div>

      <h2 class="text-title font-semibold italic">Мягкость</h2>
      <p class="text-md font-semibold">которую хочется ощущать</p>
    </div>

    <NuxtLink to="/katalog" class="mb-5">
      <Button label="Каталог товаров" bgColor="transparent" border="border border-black" />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import Button from "@/components/UI/Button.vue";


</script>

<style scoped></style>