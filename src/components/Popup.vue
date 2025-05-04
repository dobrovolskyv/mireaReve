<script setup >
import Button from "./UI/Button.vue";

defineProps({
    modelValue: Boolean
})

const emit =defineEmits(['update:modelValue'])

const close = () => {
    emit('update:modelValue', false)
}
</script>

<template>
  <div
    class="fixed z-[100] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2   w-[400px] h-[400px] bg-gray-100 rounded-lg flex flex-col items-start justify-between p-10"
    v-if="modelValue"

  >
    <h3 class="text-lg font-bold text-black">Индивидуальный подбор</h3>
    <p class="text-black text-sm">
      Мы подберём комплекты, максимально подходящие под ваш вкус, интерьер и
      образ жизни
    </p>
    <form action="" class="flex flex-col gap-3 w-full">
      <input
        class="border-none w-full py-2 border-b"
        type="text"
        placeholder="Ваше имя"
      />
      <input
        class="border-none w-full py-2 border-b"
        type="email"
        placeholder="Ваша почта"
      />

      <textarea
        name=""
        id=""
        resize="none"
        class="border-none w-full py-2 border-b"
        placeholder="Ваши пожелания"
      ></textarea>

      <Button
        label="Отправить звявку"
        bgColor="bg-black"
        class="text-white w-full"
      />
    </form>
    <p class="cursor-pointer" @click="close">x</p>
  </div>
</template>


