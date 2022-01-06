<script setup lang="ts">
import type { IPatter } from '@/@types/Patter'
defineProps<{
  patter: IPatter
}>()

</script>

<template>
  <div
    flex="~ col"
    border="b-1 gray-400"
    p="b-2 t-3"
    font="semibold"
  >
    <span
      text="gray-400"
      v-text="patter.accent"
    />

    <span
      text="lg"
      leading="6"
      v-text="patter.content"
    />
  </div>
</template>
