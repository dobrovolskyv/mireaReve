<script setup lang="ts">
import Button from "./UI/Button.vue";
import {ref} from "vue"

defineProps({
  modelValue: Boolean
})
const success = ref(false)

const emit = defineEmits(['update:modelValue'])

const close = () => {
  emit('update:modelValue', false)
  success.value = false
}

const submitform = (e: Event) => {
  e.preventDefault()
  success.value = true

  setTimeout(() => {
    close()
  }, 5000)
}
</script>

<template>
  <div
      v-if="modelValue"
      class="fixed z-[100] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[635px] w-full
      bg-gray-100 rounded-[20px] flex flex-col items-start justify-between p-10"
  >
    <img
        class="absolute top-14 right-14 cursor-pointer"
        src="@/assets/img/icons/close.svg" alt="close"
        @click="close"
    >

    <div v-if="success" class="text-center w-full flex flex-col items-center justify-center ">
      <h3 class="text-title leading-[150%] font-semibold text-black uppercase mt-1">ВАША ЗАЯВКА<br> УСПЕШНО ОТПРАВЛЕНА</h3>
      <p class="text-md mt-5 text-[#282828] max-w-[380px]">
        Наш эксперт свяжется с вами в ближайшее время — мы уже подбираем для вас комфорт,
        вдохновлённый эстетикой нашего бренда
      </p>

      <img src="@/assets/img/icons/logo_mini.png" alt="logo" class="mt-6 w-[150px]"/>
    </div>


    <form v-else class="flex flex-col gap-3 w-full" @submit="submitform">
      <div class="max-w-[396px] text-left mb-10">
        <h3 class="text-[32px] font-semibold text-black">Индивидуальный подбор</h3>
        <p class="text-black text-md ">
          Мы подберём комплекты, максимально подходящие под ваш вкус, интерьер и
          образ жизни
        </p>
      </div>

      <input
          class="border-0 bg-transparent w-full py-3 border-b border-[#D0D5DD] text-md focus:outline-none text-black"
          type="text"
          placeholder="Имя"
      />
      <input
          class="border-0 bg-transparent w-full py-3 border-b border-[#D0D5DD] text-md focus:outline-none text-black"
          type="tel"
          placeholder="Телефон"
      />

      <textarea
          name=""
          id=""
          class="border-0 resize-none bg-transparent w-full pt-3 border-b border-[#D0D5DD] text-md focus:outline-none
           text-black leading-none"
          placeholder="Ваши пожелания"
      ></textarea>

      <Button
          label="Отправить звявку"
          bgColor="bg-black"
          class="text-white w-full mt-[77px] uppercase "

      />
    </form>


  </div>
</template>


