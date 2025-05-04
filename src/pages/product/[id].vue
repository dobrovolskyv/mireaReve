<script setup >
import Footer from "@/layouts/Footer.vue";
import { useRoute } from "vue-router";
import { cardItems } from "@/data/index";

const route = useRoute();
const id = route.params.id;

// Проверка на существование товара
const product = cardItems.find((item) => item.id === Number(id));
</script>

<template >
  <div>
    <div
      class="flex flex-col-reverse md:flex-row items-start justify-between container mt-20 gap-4"
    >
      <div class="flex flex-col gap-4 w-[800px]">
        <div class="bg-gray-100 rounded-lg w-full h-[400px]"></div>
        <div class="bg-gray-100 rounded-lg w-full h-[400px]"></div>
        <div class="flex flex-row items-center gap-4 justify-between">
          <div class="bg-gray-100 rounded-lg w-full h-[200px]"></div>
          <div class="bg-gray-100 rounded-lg w-full h-[200px]"></div>
        </div>
        <div class="bg-gray-100 rounded-lg w-full h-[400px]"></div>
      </div>

      <div class="flex flex-col items-start justify-between gap-4 w-[400px]">
        <p class="text-md">Премиальный сатин</p>
        <div v-if="product" class="w-full">
          <div class="flex items-center gap-5">
            <h1 class="text-2xl font-bold">{{ product.label }}</h1>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z"
                />
              </svg>
            </span>
          </div>
          <span class="text-sm text-gray-400">Двуспальный </span>
          <div class="flex items-center justify-between gap-2">
            <p class="text-2xl">{{ product.price }}</p>
            <span class="text-sm text-gray-400">в наличии </span>
          </div>
          <div class="flex items-center justify-between gap-2 py-2 border-y">
            <span class="text-md text">Цвет </span>
            <span class="bg-black rounded-full w-6 h-6"> </span>
          </div>

          <div class="mt-4">
            <span class="text-md text font-bold">Размер </span>
            <ul>
              <li class="flex items-center justify-between text-sm mt-2">
                <span>Пододеяльник:</span>
                <span>180 × 220 см</span>
              </li>
              <li class="flex items-center justify-between text-sm mt-2">
                <span>Простыня:</span>
                <span>200 × 220 см</span>
              </li>
              <li class="flex items-center justify-between text-sm mt-2">
                <span>Наволочки:</span>
                <span>50 × 70 см (2 шт)</span>
              </li>
            </ul>
            <p class="text-sm text-gray-400">100% хлопок, сатиновое плетение</p>
          </div>

          <div class="grid grid-cols-2 gap-2">
            <select name="count" id="cars" class="w-full">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <button class="px-4 uppercase w-full border p-2">в корзину</button>
            <button class="bg-black text-white p-2 px-4 uppercase col-span-2">
              купить сейчас
            </button>
          </div>
          <img
            :src="product.imgSrc"
            alt=""
            class="w-64 h-64 object-cover mb-4"
          />

          <p class="text-md mt-2">{{ product.description }}</p>
        </div>
        <div v-else class="p-10 text-red-500">Товар не найден 😢</div>
      </div>
    </div>
    <Footer />
  </div>
</template>


