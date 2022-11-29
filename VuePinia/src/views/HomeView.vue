<script>
import { useCounterStore } from '@/stores/counter'

export default {
  setup() {
    const store = useCounterStore()
    return { store }
  },
}


</script>

<template>
  <h1>Home: {{ store.getCount }}</h1>
</template>
