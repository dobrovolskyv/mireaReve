<script setup lang="ts">
defineProps({
  label: {
    type: String,
    required: true,
  },
  bgColor: {
    type: String,
    required: false, // можно без required
  }
});
</script>

<template>
    <button :class="`${bgColor} rounded-full transition-all hover:opacity-50 border-2 px-4 py-2`">{{ label }}</button>
</template>