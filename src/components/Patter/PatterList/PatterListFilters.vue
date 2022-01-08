<script setup lang="ts" >
const props = defineProps<{
  letters: string[]
  selected: string[]
}>()

const emit = defineEmits({
  change: (selected: string[]) => true,
})

const items = computed(() => {
  return props.letters.map((letter) => {
    return {
      letter,
      isSelected: props.selected.includes(letter),
    }
  })
})

const onSelect = (letter: string) => {
  const newSelected = props.selected.slice()

  if (newSelected.includes(letter)) {
    const index = newSelected.findIndex(l => l === letter)
    newSelected.splice(index, 1)
  }
  else {
    newSelected.push(letter)
  }

  emit('change', newSelected)
}

const onClear = () => {
  emit('change', [])
}
</script>

<template>
  <div>
    <div
      grid="~ cols-8 gap-1"
    >
      <span
        v-for="(item) in items"
        :key="item.letter"
        :class="{
          'bg-gray-300': !item.isSelected,
          'bg-accent text-white': item.isSelected,
        }"
        border="rounded-md"
        text="center"
        cursor="pointer"
        p="y-0.5"
        transition="all"
        @click="onSelect(item.letter)"
      >
        {{ item.letter }}
      </span>
    </div>

    <span
      v-if="selected.length"
      display="inline-block"
      cursor="pointer"
      text="red-600 sm hover:red-800"
      transition="all"
      m="t-1"
      p="y-1 r-3"
      @click="onClear"
    >
      Очистити
    </span>
  </div>
</template>
