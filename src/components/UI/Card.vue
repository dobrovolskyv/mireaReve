<script setup lang="ts">
import { ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";

defineProps({
  label: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  imgSrc: {
    type: String,
    required: false,
  },
  icon: {
    type: String,
    required: false,
  },

  bgColor: {
    type: String,
    default: "bg-white",
  },
  type: {
    type: String,
    default: "best seller",
  },
  description: {
    type: String,
    required: false,
  },
});

const visible = ref(false);

const el = ref<HTMLElement | null>(null);

useIntersectionObserver(el, ([{ isIntersecting }]) => {
  visible.value = isIntersecting;
});

const isFavorite = ref(false);
const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value;
};

// класс для обертки карточки которая оборачивает кнопку
//  class="absolute inset-0 flex items-end justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-lg z-20"
</script>

<template>
  <div
    ref="el"
    class="group"
    :class="[
      `${bgColor} relative w-full h-[300px] border-red-100 rounded-lg p-4 flex flex-col justify-between border transition-all duration-700 hover:shadow-xl`,
      visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3',
    ]"
  >
    <img
      :src="imgSrc"
      class="w-[200px] h-[200px] object-contain absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-1"
    />

    <div
      class="absolute left-0 bottom-0 h-20 w-full flex items-end justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-lg z-20"
    >
      <button
        class="w-full bg-slate-300 text-black font-semibold py-5 px-6 transition-all rounded-bl-lg rounded-br-lg"
      >
        Купить
      </button>
    </div>

    <!-- <NuxtImg src="/pillow.jpg" width="300" height="300" /> -->
    <div class="flex items-center justify-between z-1000 relative">
      <span
        class="border-full px-2 py-1 border border-black rounded-full uppercase"
        >{{ type }}</span
      >
      <span @click="toggleFavorite" class="cursor-pointer">
        <span v-if="isFavorite">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z"
            />
          </svg>
        </span>
        <span v-else>
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path
              d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"
            />
          </svg>
        </span>
      </span>
      <NuxtLink to="cart">
        <svg
          fill="#000000"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="34px"
          height="34px"
          viewBox="0 0 902.86 902.86"
          xml:space="preserve"
          stroke="#000000"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g>
              <g>
                <path
                  d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"
                ></path>
                <path
                  d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717 c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744 c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742 C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744 c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742 S619.162,694.432,619.162,716.897z"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      </NuxtLink>
    </div>

    <div class="z-10 relative">
      <div class="flex items-center justify-between">
        <p>{{ label }}</p>
        <p>{{ price }}</p>
      </div>
      <div class="flex items-center justify-between">
        <p>{{ description }}</p>
      </div>
    </div>
  </div>
</template>