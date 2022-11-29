<template>
    <div>
        <h1>{{ todo.name }}</h1>
        <h2>{{ todo.type }}</h2>
        <h3>{{ todo.status }}</h3>
        <RouterLink :to="{ name: 'todos' }">voltar</RouterLink>

    </div>
</template>


<script>
import { TodoStore } from '../stores/todo';

export default {
    data() {
        return {
            store: TodoStore(),
            todo: {}
        }
    },

    created() {
        this.todo = this.store.getTodoById(this.$route.params.todoid);
    },
}
</script>

<style lang="scss" scoped>

</style>

