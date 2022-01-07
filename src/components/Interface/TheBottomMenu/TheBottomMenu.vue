<script setup lang="ts" >
import IconUploadMultiple from '~icons/mdi/upload-multiple'

</script>

<template>
  <div
    class="bottom-menu"
    pos="fixed left-0 bottom-0"
    h="12"
    w="full"
    shadow="warm-gray-300 md"
    bg="gray-50"
    flex="~"
    justify="center"
  >
    <div
      bg="gray-100 hover:gray-200"
      h="full"
      w="18"
      flex="~"
      align="items-center"
      justify="center"
      text="accent"
    >
      <IconUploadMultiple />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bottom-menu {
  box-shadow:
    0 -2px 5px 0 rgb(0 0 0 / 20%),
}
</style>
