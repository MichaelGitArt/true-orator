<script setup lang="ts" >
import TheHeader from './TheHeader/TheHeader.vue'
// import TheBottomMenu from './TheBottomMenu/TheBottomMenu.vue'
</script>

<template>
  <div>
    <TheHeader />
    <slot />

    <!-- <TheBottomMenu /> -->
  </div>
</template>
