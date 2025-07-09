<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Button from "./UI/Button.vue";
import PopupMain from "./PopupMain.vue";

import {ref} from "vue"



const showModal = ref(false)
const showModalPopup = () => {
  showModal.value = !showModal.value
}

</script>

<template>
  <div
    class="lg:bg-[#5B6355] text-black lg:text-white rounded-[20px] px-4 flex flex-col items-center text-center lg:p-[100px]">
    <img class="max-w-[248px] hidden lg:block" src="@/assets/img/icons/logo.png" alt="mirea reve">
    <h2 class="text-xl lg:text-[32px] mt-6 lg:mt-14 max-w-3xl">
      Пространство <span class="font-bold">уюта</span>, где прикосновение ткани становится частью внутренней
      <span class="font-bold">гармонии</span>
    </h2>
    <p class="text-[16px] mt-4 lg:mt-10 max-w-xl">Мы создаем постельное белье и текстиль из натуральных тканей, чтобы вы чувствовали заботу, тепло и тишину в каждом прикосновении</p>
    <Button class="mt-14 uppercase text-white " bgColor="bg-black"  label="Индивидуальное подбор" @click="showModalPopup" />

    <PopupMain v-model="showModal" />
  </div>
</template>