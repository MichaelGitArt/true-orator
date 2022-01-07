<script setup lang="ts">
import type { IPatter } from '@/@types/Patter'
defineProps<{
  patter: IPatter
}>()

</script>

<template>
  <div
    flex="~ col"
    p="y-2 x-3"
    shadow="gray-300 lg"
    border="gray-300 1 rounded-md"
    font="semibold"
  >
    <span
      text="gray-400"
      v-text="patter.accent.join(',')"
    />

    <div
      class="item-content"
      text="md"
      leading="6"
      v-html="patter.content"
    />
  </div>
</template>

<style lang="scss" scoped>
.item-content ::v-deep(span) {
  color: red;
}
</style>
