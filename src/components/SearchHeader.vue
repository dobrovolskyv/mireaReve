<template>
  <div class="w-full min-h-[200px] bg-white absolute top-0 left-0 rounded-b-main z-20">
    <div class="container">
      <div class="mt-10 flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <img src="@/assets/img/icons/search.png" alt="search">
          <input 
            v-model="searchQuery"
            @input="handleSearch"
            class="max-w-[215px] border-b border-[#D0D5DD] focus:outline-none" 
            type="text" 
            placeholder="Поиск"
          >
        </div>
        <div class="flex items-center gap-10">
          <span 
            class="font-semibold cursor-pointer"
            @click="clearSearch"
          >
            ОЧИСТИТЬ
          </span>
          <img 
            @click="searchStore.closeSearch()"
            class="cursor-pointer"
            src="@/assets/img/icons/close.svg" 
            alt="close"
          >
        </div>
      </div>

      <div class="mt-8 flex gap-8">
        <!-- Левая колонка с предложениями -->
        <div class="w-1/4">
          <h3 class="text-lg font-semibold mb-4">Предложения</h3>
          <ul class="space-y-2">
            <li 
              v-for="suggestion in suggestions" 
              :key="suggestion"
              class="cursor-pointer hover:text-primary"
              @click="selectSuggestion(suggestion)"
            >
              {{ suggestion }}
            </li>
          </ul>
        </div>

        <!-- Правая колонка с результатами поиска -->
        <div class="w-3/4">
          <h3 class="text-lg font-semibold mb-4">КАТАЛОГ</h3>
          
          <div v-if="searchResults.length > 0" class="grid grid-cols-3 gap-4">
            <div 
              v-for="product in searchResults" 
              :key="product.id"
              class="border rounded-lg p-4"
            >
              <img :src="product.image" alt="" class="w-full h-40 object-cover mb-2">
              <h4 class="font-medium">{{ product.name }}</h4>
              <p class="text-gray-500">{{ product.description }}</p>
              <p class="font-bold mt-2">{{ product.price }} ₽</p>
            </div>
          </div>

          <div v-else-if="searchQuery.length > 0" class="text-gray-500">
            Ничего не найдено
          </div>

          <div v-else class="grid grid-cols-3 gap-4">
            <div 
              v-for="product in popularProducts" 
              :key="product.id"
              class="border rounded-lg p-4"
            >
              <img :src="product.image" alt="" class="w-full h-40 object-cover mb-2">
              <h4 class="font-medium">{{ product.name }}</h4>
              <p class="text-gray-500">{{ product.description }}</p>
              <p class="font-bold mt-2">{{ product.price }} ₽</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue"
import { useSearchStore } from "~/stores/search";

const searchStore = useSearchStore();
const searchQuery = ref("");

// Пример данных (замените на свои реальные данные)
const allProducts = ref([
  { id: 1, name: "SILKEN SATEEN", description: "Комплект постельного", price: "10 999", image: "../assets/img/pillow.jpg" },
  { id: 2, name: "Хлопковый комплект", description: "Комплект постельного белья", price: "8 500", image: "/img/pillow.jpg" },
  { id: 3, name: "Тенселевый набор", description: "Роскошное постельное белье", price: "12 300", image: "/img/pillow.jpg" },
  // Добавьте другие товары
]);

const suggestions = ref([
  "Постельное белье из хлопка",
  "Постельное белье из тенселя",
  "Постельное белье из сатина",
  "Постельные принадлежности"
]);

// Популярные товары (показываются когда нет поискового запроса)
const popularProducts = computed(() => allProducts.value.slice(0, 3));

// Результаты поиска
const searchResults = computed(() => {
  if (searchQuery.value.length < 1) return [];
  
  const query = searchQuery.value.toLowerCase();
  return allProducts.value.filter(product => 
    product.name.toLowerCase().includes(query) || 
    product.description.toLowerCase().includes(query)
  );
});

// Обработчик поиска
const handleSearch = () => {
  // Можно добавить debounce при необходимости
};

// Выбор предложения
const selectSuggestion = (suggestion: string) => {
  searchQuery.value = suggestion;
};

// Очистка поиска
const clearSearch = () => {
  searchQuery.value = "";
};
</script>

<style scoped>
/* Добавьте свои стили при необходимости */
</style>