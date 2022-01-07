<template>
  <div>
    <PatterItem
      v-for="patter in patters"
      :key="patter.id"
      :patter="patter"
      m="b-4"
    />
  </div>
</template>

<script setup lang="ts">
import patters from '../../assets/patters.json'
import PatterItem from './PatterItem.vue'
</script>
