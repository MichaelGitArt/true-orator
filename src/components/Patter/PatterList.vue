<template>
  <div>
    <PatterItem
      v-for="patter in patters"
      :key="patter.id"
      :patter="patter"
    />
  </div>
</template>

<script setup lang="ts">
import patters from '../../assets/patters.json'
import PatterItem from './PatterItem.vue'

// console.log(patters.map((item, index) => ({ ...item, id: index })))
// ...
</script>

<style lang="scss" scoped></style>
