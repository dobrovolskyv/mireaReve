<script setup >
import { ref, computed } from "vue";
import { cardItems as originalItems } from "@/data/index";

import Card from "./UI/Card.vue";

const cardItems = ref(originalItems);
const activeCategory = ref("all");

const filteredItems = computed(() => {
  if (activeCategory.value === "all") {
    return cardItems.value;
  }
  return cardItems.value.filter(
    (item) => item.category === activeCategory.value
  );
});


const setCategory = (category) => {
  activeCategory.value = category;
};
</script>

<template>
  <div class="">
    <!-- <div class="flex items-center justify-between">
      <div>
        <p class="text-sm">Шопинг по категориям</p>
        <h2 class="text-xl uppercase">ВсЕ для идеального сна</h2>
      </div>

      <div>
        <ul class="flex gap-5 flex-row">
          <li
            @click="setCategory('all')"
            class="bg-white py-1 px-3 border border-black rounded-full cursor-pointer"
          >
            Все
          </li>
          <li
            @click="setCategory('постельное')"
            class="bg-white py-1 px-3 border border-black rounded-full"
          >
            Постельное белье
          </li>
          <li
            @click="setCategory('подушки')"
            class="bg-white py-1 px-3 border border-black rounded-full"
          >
            Подушки
          </li>
          <li
            @click="setCategory('одеяло')"
            class="bg-white py-1 px-3 border border-black rounded-full"
          >
            Одеяло
          </li>
        </ul>
      </div>
    </div> -->

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-4 "
    >
    <NuxtLink
      v-for="item in filteredItems"
      :key="item.id"
      :to="`/product/${item.id}`"
      class="block"
    >
      <Card
        :label="item.label"
        :price="item.price"
        :imgSrc="item.imgSrc"
        :description="item.description"
      
      />
    </NuxtLink>
    </div>
  </div>
</template>