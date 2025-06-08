<template>
  <div class="container py-10">
    <h1 class="text-2xl font-bold mb-4">Избранное</h1>
    <div v-if="favorites.length">
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div v-for="item in favorites" :key="item.id" class="border p-4 rounded-lg shadow-md">
          <img :src="item.imgSrc" :alt="item.label" class="w-full h-40 object-cover mb-2">
          <h2 class="font-semibold text-lg">{{ item.label }}</h2>
          <p class="text-gray-500">{{ item.price }}</p>
          <NuxtLink :to="`/product/${item.id}`" class="text-blue-500 text-sm">Подробнее</NuxtLink>
        </div>
      </div>
    </div>
    <div v-else class="text-gray-500">Вы ещё ничего не добавили в избранное 💔</div>
  </div>
</template>

<script setup>
import { useFavoritesStore } from "@/stores/favorites";
import { cardItems } from "@/data"; // 
import { onMounted, computed } from "vue";

const favoritesStore = useFavoritesStore()

onMounted(() => {
  favoritesStore.init()
})

// Находим все товары, ID которых есть в избранном
const favorites = computed(() =>
  cardItems.filter((item) => favoritesStore.favorites.includes(item.id)));
</script>
