<template>
  <div>
    <div class="flex flex-col-reverse md:flex-row items-start justify-between container mt-20 gap-4">
      <!-- img placeholders -->
      <div class="flex flex-col gap-4 w-[800px]">
        <div class="bg-gray-100 rounded-lg w-full h-[400px]"></div>
        <div class="bg-gray-100 rounded-lg w-full h-[400px]"></div>
        <div class="flex flex-row items-center gap-4 justify-between">
          <div class="bg-gray-100 rounded-lg w-full h-[200px]"></div>
          <div class="bg-gray-100 rounded-lg w-full h-[200px]"></div>
        </div>
        <div class="bg-gray-100 rounded-lg w-full h-[400px]"></div>
      </div>
      <!-- /img placeholders -->

      <div class="flex flex-col items-start justify-between gap-4 max-w-[525px] w-full">
        <p class="text-md text-gray-400 leading-[100%]">Премиальный сатин</p>
        <div v-if="product" class="w-full">
          <div class="flex items-start justify-between gap-5">
            <h1 class="text-2xl font-bold">{{ product.label }}</h1>
            <span class="cursor-pointer" @click="favoritesStore.toggleFavorite(product.id)">
              <span v-if="favoritesStore.isFavorite(product.id)">
               
                <!-- filled heart -->
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path
                    d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z" />
                </svg>
              </span>
              <span v-else>
                 <!-- empty heart -->
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                  <path
                    d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" />
                </svg>
              </span>
            </span>
          </div>
          <div class="flex items-center gap-2 mt-5">
            <img src="@/assets/img/icons/cloud.png" alt="">
            <span class="text-sm text-gray-400 font-Inter font-regular">Двуспальный </span>
          </div>
          <div class="flex items-center justify-between gap-2 mt-7">
            <p class="text-2xl font-bold">{{ product.price }}</p>
            <div class="flex items-center gap-2">
              <img src="@/assets/img/icons/yet.png" alt="">
              <span class="text-sm text-gray-400 font-light">В наличии </span>
            </div>
          </div>
          <div class="flex items-center justify-between gap-2 py-2 border-y my-5">
            <span class="text-md font-bold">Цвет </span>
            <span class="bg-black rounded-full w-6 h-6"> </span>
          </div>

          <div class="">
            <span class="text-xl text font-bold">Размеры</span>
            <ul class="mt-8">
              <li class="flex items-center justify-between text-sm mt-2">
                <span>Пододеяльник:</span>
                <span class="text-gray-400">180 × 220 см</span>
              </li>
              <li class="flex items-center justify-between text-sm mt-2">
                <span>Простыня:</span>
                <span class="text-gray-400">200 × 220 см</span>
              </li>
              <li class="flex items-center justify-between text-sm mt-2">
                <span>Наволочки:</span>
                <span class="text-gray-400">50 × 70 см (2 шт)</span>
              </li>
            </ul>
            <p class="text-sm text-gray-400 mt-2">100% хлопок, сатиновое плетение</p>
          </div>

          <div class="grid grid-cols-3 gap-2 mt-10">
            <select name="count" id="cars" class="w-full max-w-[205px] border border-black rounded-md p-2.5">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <Button label="В корзину" bgColor="bg-white" border="border border-black"
              class="py-2.5 font-bold uppercase col-span-2" />
            <button class="bg-black text-white p-2 px-4 uppercase col-span-2">
              купить сейчас
            </button>
          </div>
          <img :src="product.imgSrc" alt="" class="w-64 h-64 object-cover mb-4" />

          <p class="text-md mt-2">{{ product.description }}</p>
        </div>
        <div v-else class="p-10 text-red-500">Товар не найден 😢</div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Footer from "@/layouts/Footer.vue";
import { useRoute } from "vue-router";
import { cardItems } from "@/data/index";
import Button from "@/components/UI/Button.vue";
import { useFavoritesStore } from "@/stores/favorites";
import { onMounted } from "vue";

const route = useRoute();
const id = Number(route.params.id);
const favoritesStore = useFavoritesStore()

onMounted(()=>{
  favoritesStore.init()
})

// Проверка на существование товара
const product = cardItems.find((item) => item.id === Number(id));
</script>
