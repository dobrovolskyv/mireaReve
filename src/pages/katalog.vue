<template>
  <div>
    <div class="flex flex-col items-center justify-between">
      <h1 class="text-title font-bold">Каталог</h1>
      <img class="mt-10" src="@/assets/img/icons/logo.png" alt="logo">
    </div>


    <div class="flex items-start justify-between  max-w-[1260px] mx-auto mt-[140px]">

      <div class="w-full  max-w-xs  p-6 rounded-lg space-y-6 text-sm font-medium text-black mr-10">
        <h2 class="text-lg font-bold">ВСЕ ФИЛЬТРЫ</h2>

        <!-- Цена -->
        <div>
          <label class="block mb-2 font-bold">Цена ₽</label>
          <div class="flex gap-2">
            <input type="text" placeholder="От" class="w-[97px] p-2 rounded bg-white border border-gray-300" />
            <input type="text" placeholder="До" class="w-[97px] p-2 rounded bg-white border border-gray-300" />
          </div>
        </div>

        <!-- Категория -->
        <div>
          <label class="block mb-2 font-bold">Категория</label>
          <input type="text" placeholder="Найдите в списке"
            class="w-full p-2 mb-2 rounded bg-white border border-gray-300" />
          <div class="max-h-32 overflow-y-auto space-y-2 pr-2">
            <div><input type="checkbox" id="1" class="mr-2"><label for="1">Постельное бельё</label></div>
            <div><input type="checkbox" id="2" class="mr-2"><label for="2">Подушки</label></div>
            <div><input type="checkbox" id="3" class="mr-2"><label for="3">Одеяла</label></div>
            <div><input type="checkbox" id="4" class="mr-2"><label for="4">Простыни на резинке</label></div>
            <div><input type="checkbox" id="5" class="mr-2"><label for="5">Наволочки</label></div>
            <div><input type="checkbox" id="6" class="mr-2"><label for="6">Пледы</label></div>
          </div>
        </div>

        <!-- Цвет -->
        <div>
          <label class="block mb-2 font-bold">Цвет</label>
          <div class="max-h-32 overflow-y-auto space-y-2 pr-2">
            <template v-for="i in 7" :key="i">
              <div class="flex items-center">
                <input type="checkbox" :id="'color' + i" class="mr-2" />
                <label :for="'color' + i" class="flex items-center gap-2">
                  <span class="inline-block w-4 h-4 rounded-full bg-gray-300"></span> Цвет
                </label>
              </div>
            </template>
          </div>
        </div>

        <!-- Размер -->
        <div>
          <label class="block mb-2 font-bold">Размер</label>
          <div class="space-y-2">
            <div><input type="checkbox" id="r1" class="mr-2"><label for="r1">Односпальный</label></div>
            <div><input type="checkbox" id="r2" class="mr-2"><label for="r2">Полутороспальный</label></div>
            <div><input type="checkbox" id="r3" class="mr-2"><label for="r3">Двуспальный</label></div>
            <div><input type="checkbox" id="r4" class="mr-2"><label for="r4">Евро</label></div>
            <div><input type="checkbox" id="r5" class="mr-2"><label for="r5">Семейный</label></div>
            <div><input type="checkbox" id="r6" class="mr-2"><label for="r6">Кинг-сайз</label></div>
          </div>
        </div>

        <!-- Состав -->
        <div>
          <label class="block mb-2 font-bold">Состав</label>
          <div class="max-h-32 overflow-y-auto space-y-2 pr-2">
            <div><input type="checkbox" id="c1" class="mr-2"><label for="c1">Хлопок</label></div>
            <div><input type="checkbox" id="c2" class="mr-2"><label for="c2">Сатин</label></div>
            <div><input type="checkbox" id="c3" class="mr-2"><label for="c3">Шёлк</label></div>
            <div><input type="checkbox" id="c4" class="mr-2"><label for="c4">Тенсел</label></div>
            <div><input type="checkbox" id="c5" class="mr-2"><label for="c5">Пух</label></div>
            <div><input type="checkbox" id="c6" class="mr-2"><label for="c6">Перо</label></div>
            <div><input type="checkbox" id="c7" class="mr-2"><label for="c7">Лебяжий пух</label></div>
          </div>
        </div>

        <!-- Зона использования -->
        <div>
          <label class="block mb-2 font-bold">Зона использования</label>
          <div class="space-y-2">
            <div><input type="checkbox" id="z1" class="mr-2"><label for="z1">Спальня</label></div>
            <div><input type="checkbox" id="z2" class="mr-2"><label for="z2">Кухня</label></div>
            <div><input type="checkbox" id="z3" class="mr-2"><label for="z3">Гостиная</label></div>
            <div><input type="checkbox" id="z4" class="mr-2"><label for="z4">Ванная</label></div>
            <div><input type="checkbox" id="z5" class="mr-2"><label for="z5">Отель</label></div>
            <div><input type="checkbox" id="z6" class="mr-2"><label for="z6">Терраса</label></div>
          </div>
        </div>

        <!-- Итог -->
        <div class="text-xs text-gray-500 mt-4">Нашли 4 789 товаров</div>
        <button class="w-full bg-black text-white py-2 rounded-full mt-2 hover:opacity-90 transition">ПОКАЗАТЬ</button>
      </div>

      <CardList />


    </div>

  </div>
</template>

<script setup>
import CardList from '@/components/CardList.vue';


definePageMeta({
  layout: "navscroll"
})


</script>