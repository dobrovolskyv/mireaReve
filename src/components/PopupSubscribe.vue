<script setup lang="ts">
import { ref } from "vue";

defineProps({
    modelValue: Boolean,
})

const success = ref(false)

const emit = defineEmits(['update:modelValue'])

const close = () => {
    emit('update:modelValue', false)
    success.value = false
}

</script>

<template>
    <div v-if="modelValue"
        class="fixed z-[100] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[635px] w-full bg-white rounded-[20px] flex flex-col items-start justify-between p-10 pt-28 ">
        <img class="absolute top-14 right-14 cursor-pointer" src="@/assets/img/icons/close.svg" alt="close"
            @click="close">

        <div class="text-center w-full flex flex-col items-center justify-center ">
            <h3 class="text-title leading-[150%] font-semibold text-black uppercase mt-1">Готово</h3>
            <p class="text-md mt-5 text-secondary max-w-[380px]">
                Спасибо за подписку! <br>
                Теперь — только тщательно отобранные письма<br> с тем, что действительно вдохновляет и стоит<br>
                вашего внимания.
            </p>

            <img src="@/assets/img/icons/logo_popup.png" alt="logo" class="mt-16 max-w-[250px] w-full">

        </div>




    </div>
</template>



<style lang="scss" scoped></style>
