<template>
  <div class="about">
    <h1>My counter: {{ store.getCount }}</h1>
    <button @click="store.increment()">CLICA-ME</button>
  </div>
</template>

<script>
import { useCounterStore } from '@/stores/counter'

export default {
  setup() {
    const store = useCounterStore()
    return { store }
  },
}


</script>


<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
