<script setup lang="ts">
import { computed, ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

import { toRefs } from 'vue'

// defineProps({
//   label: String,
//   price: String,
//   imgSrc: String,
//   icon: String,
//   bgColor: {
//     type: String,
//     default: 'bg-white',
//   },
//   type: {
//     type: String,
//     default: 'best seller',
//   },
//   description: String,
// })

interface Props {
  label: string;
  price: string;
  imgSrc?: string;
  icon?: string;
  bgColor?: string;
  type?: string;
  description: string;
}
const props = withDefaults(defineProps < Props > (), {
  label: '',
  price: '',
  imgSrc: '',
  icon: '',
  bgColor: 'bg-white',
  type: 'best seller',
  description: '',
})

const visible = ref(false)
const el = ref < HTMLElement | null > (null)

useIntersectionObserver(el, ([{ isIntersecting }]) => {
  visible.value = isIntersecting
})

const isFavorite = ref(false)
const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value
}
const getStyle = computed((): any => {
  return [props.bgColor, visible.value ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3']
})
// const getStyle = computed(() => {
//   return [props.bgColor, props.visible.value ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3']
// })



</script>

<template>
  <div ref="el"
    class="group relative w-full h-[300px] border-red-100 rounded-lg p-5 flex flex-col justify-between border transition-all duration-700 hover:shadow-xl"
    :class="getStyle">
    <img src="@/assets/img/pillow.jpg"
      class="w-[200px] h-[200px] object-contain absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-1 pointer-events-none"
      alt="podushka" />

    <!-- КНОПКА КУПИТЬ — появляется при hover -->
    <div
      class="absolute left-0 bottom-0 h-20 w-full flex items-end justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-lg z-20">
      <NuxtLink to="/cart"
        class="w-full bg-slate-300 text-black font-semibold py-5 px-6 transition-all rounded-bl-lg rounded-br-lg text-center">
        Купить
      </NuxtLink>
    </div>

    <!-- Верх: тип + корзина + избранное -->
    <div class="flex items-center justify-between z-10 relative">
      <span class="border-full px-2 py-1 border border-black rounded-full uppercase">
        {{ props.type }}
      </span>
      <div class="flex items-center gap-2.5">
        <!-- Убрал NuxtLink с иконки, чтобы не перехватывал клик -->
        <img src="@/assets/img/icons/cart.png" alt="korzina" />

        <span class="cursor-pointer" @click="toggleFavorite">
          <span v-if="isFavorite">
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
    </div>

    <!-- Контент -->
    <div class="z-10 relative">
      <div class="flex items-center justify-between font-semibold uppercase">
        <p>{{ props.label }}</p>
        <p>{{ props.price }}</p>
      </div>
      <div class="flex items-center justify-between">
        <p>{{ props.description }}</p>
      </div>
    </div>
  </div>
</template>
