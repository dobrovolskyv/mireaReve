<script setup >
import sets from "@/assets/img/sets1.png";
import Button from "./UI/Button.vue";

</script>

<template>
  <div class="flex items-center justify-between gap-3 my-10 h-[400px]">
    <div class="bg-gray-500 w-full rounded-xl h-full">
        <img :src="sets" class="w-full h-full object-cover rounded-xl" />
    </div>

    <div class="relative group w-full h-[400px] rounded-xl overflow-hidden">
    <img
      :src="sets"
      alt="Background"
      class="object-cover w-full h-full"
    />

    <!-- Тёмная подложка + текст -->
    <div
      class="absolute inset-0 bg-lime-500 bg-opacity-100 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end items-start gap-4 p-5 text-white rounded-xl"
    >
      <h3 class="text-2xl">Порадуйте своих близких</h3>
      <p class="text-sm">
        Изящные наборы с текстилем для дома —<br />
        чтобы дарить не просто вещи, а ощущения уюта
      </p>
      <Button label="Выбрать" bgColor="bg-white" class="text-black" />
    </div>
  </div>

  </div>
</template>