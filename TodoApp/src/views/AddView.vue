<template>
    <div>
        <form @submit.prevent="addTask">
            <p>
                <label for="txtName">Nome: </label>
                <input type="text" id="txtName" v-model="name">

            </p>
            <p>
                <label for="sltType">Tipo: </label>
                <select id="sltType" v-model="type">
                    <option value="pessoal">Pessoal</option>
                    <option value="profissional">Profissional</option>
                </select>
            </p>

            <p>
                <input type="submit" value="ADICIONAR" />
            </p>


        </form>
    </div>
</template>

<script>
import { TodoStore } from '../stores/todo';

export default {
    data() {
        return {
            store: TodoStore(),
            name: '',
            type: ''

        }
    },
    methods: {
        addTask() {
            this.store.add(this.name, this.type)
            alert('Tarefa adicionada com sucesso!')
            this.$router.push({ name: 'todos' })
        }
    },
}
</script>

<style lang="scss" scoped>

</style>