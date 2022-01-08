<template>
  <div>
    <div
      flex="~"
      align="items-center"
      justify="between"
      m="b-5"
    >
      <slot name="header" />

      <div
        class="btn"
        :class="{
          'btn--primary': selected.length
        }"
        m="l-3"
        @click="onToggleFilter()"
      >
        <TuneVariantIcon />
      </div>
    </div>

    <PatterListFilters
      v-if="isFilterVisible"
      m="b-4"
      :letters="letters"
      :selected="selected"
      @change="onApplyFilter"
    />

    <PatterItem
      v-for="patter in patters"
      :key="patter.id"
      :patter="patter"
      m="b-4"
    />
  </div>
</template>

<script setup lang="ts">
import { useStorage, useToggle } from '@vueuse/core'
import PatterItem from '../PatterItem.vue'
import PatterListFilters from './PatterListFilters.vue'
import TuneVariantIcon from '~icons/mdi/tune-variant'

import pattersData from '@/assets/patters.json'

const letters = pattersData.reduce<string[]>((arr, item) => {
  item.accent.forEach((letter) => {
    if (!arr.includes(letter))
      arr.push(letter)
  })

  return arr
}, []).sort()

const selected = useStorage<string[]>(
  'filter-selected-letters',
  [],
)

const patters = computed(() => {
  if (selected.value.length === 0)
    return pattersData

  return pattersData.filter((item) => {
    let includesLetter = false
    item.accent.forEach((accentLetter) => {
      if (selected.value.includes(accentLetter))
        includesLetter = true
    })

    return includesLetter
  })
})

const [
  isFilterVisible,
  onToggleFilter,
] = useToggle()

const onApplyFilter = (selectedLetters: string[]) => {
  selected.value = selectedLetters
}
</script>
