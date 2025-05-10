<script setup lang="ts">
defineProps({
  label: {
    type: String,
    required: true,
  },
  bgColor: {
    type: String,
    required: false,
    default: "transparent"// можно без required
  },
  border: {
    type: String,
    required: false
  }
});
</script>

<template>
    <button :class="`${bgColor} text-md rounded-full transition-all hover:opacity-50 ${border} px-4 py-2`">{{ label }}</button>
</template>