<template>
  <q-page padding>
    <q-spinner v-if="loading" class="fixed-center" color="primary" size="5em"/>
    <div v-else> 
      <q-btn @click="$router.push(`/`)" color="primary" label="Voltar para listagem" class="q-mb-md"/>
      <q-card class="q-pa-md">
        <div class="row q-col-gutter-md">
          <div class="col-md-4">
            <q-img :src="character.image" :alt="character.name" />
          </div>
          <div class="col-md-8">
            <h2>{{ character.name }}</h2>
            <p><strong>Status:</strong> {{ character.status }}</p>
            <p><strong>Espécie:</strong> {{ character.species }}</p>
            <p><strong>Gênero:</strong> {{ character.gender }}</p>
            <p><strong>Origem:</strong> {{ character.origin.name }}</p>

            <h4 class="q-mt-md">Episódios</h4>
            <ul>
              <li v-for="ep in character.episode" :key="ep.id">
                {{ ep.episode }} - {{ ep.name }}
              </li>
            </ul>
          </div>
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { useQuery } from '@vue/apollo-composable'
import { GET_CHARACTER_DETAIL } from '../graphql/queries'
import { computed } from 'vue'

const route = useRoute()
const { result, loading } = useQuery(GET_CHARACTER_DETAIL, {
  id: route.params.id
})

const character = computed(() => result.value?.character ?? null)
</script>
