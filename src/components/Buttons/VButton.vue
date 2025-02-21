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
  font-size: 20px;
  padding: 8px 16px;
  border-radius: 8px;
  background: #4d2edc;
  color: #cedddd;
}
</style>
