  <script setup >
import { navItems } from "@/data";
import { ref, onMounted, onUnmounted } from "vue";

const showNav = ref(false);

const handleScroll = () => {
  showNav.value = window.scrollY > 100;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template >
  <header class="">
    <div :class="[`bg-white fixed top-0 w-full transition-all duration-500 z-50`,
   showNav ? `opacity-100 translate-y-0` : `opacity-0 -translate-y-10`

   ]">
      <div class="container py-4 flex items-center justify-between">
        <div class="flex items-center justify-content gap-4">
          <NuxtLink to="/">Mirea Reve</NuxtLink>
          <NuxtLink to="/">search</NuxtLink>
        </div>

        <nav>
          <ul class="flex items-center gap-4 uppercase">
            <li v-for="item in navItems" :key="item.id">
              <NuxtLink
                :to="item.link"
                class="bg-black rounded-full text-white px-2 py-1"
                >{{ item.title }}</NuxtLink
              >
            </li>
          </ul>
        </nav>
        <NuxtLink to="favorites">
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
        </NuxtLink>
      </div>
    </div>
    <slot />
  </header>
</template>

