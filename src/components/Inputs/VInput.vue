<template>
  <input
    v-model="model"
    class="v-input"
    :type="type"
  />
</template>

<script setup lang="ts">
import { InputTypes } from '@/components/Inputs/types.ts';

withDefaults(
  defineProps<{
    type: InputTypes;
  }>(),
  {
    type: InputTypes.Text,
  }
);
const model = defineModel<string>();
</script>

<style lang="scss" scoped>
.v-input {
  border: 1px solid var(--main);
  border-radius: 4px;
  padding: 4px 8px;
}
</style>
