<template>
  <svg-icon
    type="mdi"
    :path="iconPath"
  />
</template>

<script setup lang="ts">
import SvgIcon from 'vue3-icon';
import { computed } from 'vue';
import { paths } from './icons.ts';

const props = defineProps<{
  path: keyof typeof paths;
}>();

const iconPath = computed<string>(() => paths[props.path]);
</script>

<style lang="scss" scoped></style>
