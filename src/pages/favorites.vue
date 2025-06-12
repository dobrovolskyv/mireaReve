<template>
  <div class="container py-10">
    <h1 class="text-title font-bold mb-10">Избранное</h1>
    <div v-if="favorites.length">
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <Card
          v-for="item in favorites"
          :key="item.id"
          :label="item.label"
          :price="item.price"
          :imgSrc="item.imgSrc"
          :description="item.description"
          :type="'избранное'"
          :bgColor="'bg-white'"
        />
      </div>
    </div>
    <div v-else class="text-md">
      <p>Пока здесь пусто… Но это легко исправить!</p>
      <p class="mt-5">Добавляйте товары в избранное, чтобы быстро находить их позже.</p>

      <NuxtLink to="/katalog">
        <Button label="открыть каталог" bgColor="bg-black" class="text-white max-w-[370px] w-full uppercase mt-10"/>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { useFavoritesStore } from "@/stores/favorites";
import { cardItems } from "@/data"; // 
import { onMounted, computed } from "vue";

import Button from "@/components/UI/Button.vue";
import Card from "@/components/UI/Card.vue";

const favoritesStore = useFavoritesStore()

onMounted(() => {
  favoritesStore.init()
})

// Находим все товары, ID которых есть в избранном
const favorites = computed(() =>
  cardItems.filter((item) => favoritesStore.favorites.includes(item.id)));
</script>
