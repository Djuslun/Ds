<template>
  <v-button
    class="color-mode-button"
    @click="changeColorMode"
  >
    <v-icon
      v-if="mode === 'light'"
      path="sun"
    />

    <v-icon
      v-else
      path="moon"
      class="color-mode-button__icon-moon"
    />
  </v-button>
</template>

<script setup lang="ts">
import { VButton } from '@/components/Buttons';
import { useColorMode } from './useColorMode.ts';
import { VIcon } from '@/components/Icons';

const { mode, changeColorMode } = useColorMode();
</script>

<style lang="scss" scoped>
.color-mode-button {
  @include font-regular(0, 0);

  &__icon-moon {
    position: relative;
    left: 13%;
  }
}
</style>
