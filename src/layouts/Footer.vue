<script setup lang="ts">
import PopupSubscribe from '@/components/PopupSubscribe.vue';
import {ref} from "vue";

const showModal= ref(false)

const showModalPopup= ()=> {
    showModal.value = !showModal.value
}



</script>

<template>

    <footer class=" bg-gray-primary">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div class="md:flex md:justify-between">
                <div class="mb-6 md:mb-0">
                    <a href="/" class="flex items-center">

                        <img class="mt-14 max-w-[393px] w-full" src="@/assets/img/icons/logo.png" alt="logo" />
                    </a>
                </div>
                <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 class="mb-5 text-md  text-gray-300 uppercase ">Каталог</h2>
                        <ul class="text-white ">
                            <li>
                                <a href="#" class="hover:underline">Подушки</a>
                            </li>
                            <li class="mt-2.5">
                                <a href="#" class="hover:underline">Одеяло</a>
                            </li>
                            <li class="mt-2.5">
                                <a href="#" class="hover:underline">Постельное белье</a>
                            </li>
                            <li class="mt-2.5">
                                <a href="#" class="hover:underline">Подарочные наборы</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-5 text-md  text-gray-300 uppercase ">Покупателем</h2>
                        <ul class="text-white ">
                            <li>
                                <a href="#" class="hover:underline">Покупака и оплата</a>
                            </li>
                            <li class="mt-2.5">
                                <a href="#" class="hover:underline">Возврат товара</a>
                            </li>
                            <li class="mt-2.5">
                                <a href="#" class="hover:underline">Отслеживание заказа</a>
                            </li>
                            <li class="mt-2.5">
                                <a href="#" class="hover:underline">Служба заботы</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-5 text-md  text-gray-300 uppercase ">Mirea Reve</h2>
                        <ul class="text-white ">
                            <li class="">
                                <a href="#" class="hover:underline">О нас</a>
                            </li>
                            <li class="mt-2.5">
                                <a href="#" class="hover:underline">Производство</a>
                            </li>
                            <li class="mt-2.5">
                                <a href="#" class="hover:underline">Качество и материал</a>
                            </li>
                            <li class="mt-2.5">
                                <a href="#" class="hover:underline">Сертификаты</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            <div class="sm:flex items-center md:items-end  sm:justify-between mt-24">
                <ul class="text-white">
                    <li class="mt-2.5">
                        <NuxtLink to="" class="cursor-pointer">Политика конфиденциальности</NuxtLink>
                    </li>
                    <li class="mt-2.5">
                        <NuxtLink to="" class="cursor-pointer">Пользовательское соглашение</NuxtLink>
                    </li>
                    <li class="mt-2.5">
                        <NuxtLink to="" class="cursor-pointer">Обработка персональных данных </NuxtLink>
                    </li>
                </ul>
                <div class="flex flex-col ">
                    <div>
                        <h2 class="md:text-title text-center md:text-left text-white">Подпишитесь на новости и скидки
                        </h2>
                        <form class="flex flex-col md:flex-row gap-5 mt-5">
                            <input class="py-2.5 px-5 rounded-[20px] md:max-w-[192px] w-full" type="text"
                                placeholder="Имя" required>
                            <input class="py-2.5 px-5 rounded-[20px] md:max-w-[192px] w-full" type="email"
                                placeholder="E-mail" required>
                            <button class="py-2.5 px-5 rounded-[20px] bg-black text-white uppercase w-full"
                                type="submit" @click="showModalPopup">Подписаться</button>
                        </form>
                    </div>
                    <div class="flex items-center gap-5 mt-10">
                    
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="23" height="23" stroke="white" />
                        </svg>

                        <p class="text-text-white max-w-md">Согласен с условиями обработки персональных данных и согласен с [Политикой конфиденциальности].</p>
                    </div>
                </div>

            </div>
        </div>

        <PopupSubscribe v-model="showModal"/>
    </footer>


</template>