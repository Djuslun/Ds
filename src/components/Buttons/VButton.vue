<template>
  <button class="v-button">{{ label }}</button>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
}>();
</script>

<style scoped lang="scss">
.v-button {
  $gradient: linear-gradient(to right, #dc2d8c, #1976ed);
  @include font-regular();
  @include gradient-border-with-radius($main, $gradient, 2px, 8px);

  padding: 4px 12px;
  color: $text;
  cursor: pointer;
}
</style>
