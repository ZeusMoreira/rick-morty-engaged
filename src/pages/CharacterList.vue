<template>
  <q-page padding>
    <q-spinner v-if="loading" class="fixed-center" color="primary" size="5em"/>
    <div v-else>
      <q-input
        v-model="search"
        label="Buscar personagem"
        class="q-mb-md"
        @change=""
      />
      <div class="row q-col-gutter-md">
        <CharacterCard
          v-for="char in characters"
          :key="char.id"
          :character="char"
          class="col-xs-12 col-sm-6 col-md-4 col-lg-3"
        />
      </div>
      <Pagination
        :currentPage="page"
        :maxPages="pages"
        @page-changed="changePage"
      />
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import { ref, watch, computed } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { GET_CHARACTERS } from '../graphql/queries'
import CharacterCard from '../components/CharacterCard.vue'
import Pagination from '../components/Pagination.vue'

function debounce(fn: Function, delay: number) {
  let timeout: ReturnType<typeof setTimeout>
  return (...args: any[]) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => fn(...args), delay)
  }
}


const page = ref(1)
const search = ref('')
const { result, loading, refetch } = useQuery(GET_CHARACTERS, {
  page: page.value,
  name: search.value
})

const debouncedSearch = debounce(() => {
  refetch({ page: page.value, name: search.value })
}, 500)

watch([page, search], () => {
  debouncedSearch()
})

function changePage(newPage: number) {
  page.value = newPage
}

const characters = computed(() => result.value?.characters?.results ?? [])
const pages = computed(() => result.value?.characters?.info?.pages ?? 1)
</script>
