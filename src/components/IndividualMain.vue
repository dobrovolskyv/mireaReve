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
    class="bg-[#5B6355] text-white rounded-[20px] px-4 flex flex-col items-center text-center p-[100px]">
    <img class="max-w-[248px]" src="@/assets/img/icons/logo.png" alt="mirea reve">
    <h2 class="text-[32px] mt-14 max-w-3xl">
      Пространство <span class="font-bold">уюта</span>, где прикосновение ткани становится частью внутренней
      <span class="font-bold">гармонии</span>
    </h2>
    <p class="text-[16px] mt-10 max-w-xl">Мы создаем постельное белье и текстиль из натуральных тканей, чтобы вы чувствовали заботу, тепло и тишину в каждом прикосновении</p>
    <Button class="mt-14 uppercase" bgColor="bg-black"  label="Индивидуальное подбор" @click="showModalPopup" />

    <PopupMain v-model="showModal" />
  </div>
</template>