<template>
  <q-card class="my-card q-ma-sm" @click="$router.push(`/character/${character.id}`)" clickable>
    <q-img :src="character.image" :alt="character.name" height="200px" />
    <q-card-section>
      <div class="text-h6">{{ character.name }}</div>
      <div class="text-caption">{{ character.status }} - {{ character.species }}</div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
defineProps<{
  character: {
    id: string
    name: string
    image: string
    status: string
    species: string
  }
}>()
</script>
