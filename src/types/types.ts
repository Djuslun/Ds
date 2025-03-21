import type { VNode, VNodeNormalizedChildren } from 'vue';

export type VNodeArray = VNode[] | VNodeNormalizedChildren;
export type TSlot<T extends VNodeArray = VNodeArray> = T | string | undefined;
