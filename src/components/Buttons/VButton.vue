<template>
  <button class="v-button">
    {{ label }}

    <slot v-if="!label" />
  </button>
</template>

<script setup lang="ts">
import type { TSlot } from '@/types';

defineProps<{
  label?: string;
}>();

defineSlots<{
  default(): TSlot;
}>();
</script>

<style scoped lang="scss">
.v-button {
  @include font-regular();

  background: var(--bg-control);
  border-radius: 8px;
  padding: 8px;
  color: var(--text);
  cursor: pointer;
  border: 1px solid var(--border);
  box-shadow: var(--border-box-shadow);
  transition: all 0.3s;

  &:hover {
    background: var(--button-hover);
  }
}
</style>
