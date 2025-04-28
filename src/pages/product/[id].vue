<script setup >
import { useRoute } from 'vue-router'
import { cardItems } from '@/data/index'

const route = useRoute();
const id = route.params.id;

// Проверка на существование товара
const product = cardItems.find((item) => item.id === Number(id));
</script>

<template>
  <div v-if="product" class="p-10">
    <h1 class="text-2xl font-bold mb-4">{{ product.label }}</h1>
    <img :src="product.imgSrc" alt="" class="w-64 h-64 object-cover mb-4" />
    <p class="text-lg">{{ product.price }}</p>
    <p class="text-md mt-2">{{ product.description }}</p>
  </div>

  <div v-else class="p-10 text-red-500">Товар не найден 😢</div>
</template>


