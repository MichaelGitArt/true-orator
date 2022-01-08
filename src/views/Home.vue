<script setup lang="ts">
import PatterList from '@/components/Patter/PatterList/PatterList.vue'
</script>

<template>
  <div
    p="x-3 b-4 t-5"
  >
    <PatterList>
      <template #header>
        <h1
          text="xl"
          font="semibold"
        >
          Скоромовки
        </h1>
      </template>
    </PatterList>
  </div>
</template>
