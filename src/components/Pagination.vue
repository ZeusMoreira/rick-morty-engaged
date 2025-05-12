<template>
  <div class="q-mt-md row justify-center">
    <q-pagination
      :model-value="currentPage"
      :max="maxPages"
      @update:model-value="onPageChange"
    />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{ currentPage: number; maxPages: number }>()
const emit = defineEmits(['page-changed'])

function onPageChange(newPage: number) {
  emit('page-changed', newPage)
}
</script>
