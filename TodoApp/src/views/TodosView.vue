<script>

import { TodoStore } from '@/stores/todo'

export default {
  data() {
    return {
      store: TodoStore(),
      type: 'todos',
      status: 'todos'
    }
  }
}

</script>

<template>
  <div>
    <h1>Todo App</h1>

    TIPO:
    <select id="sltType" v-model="type">
      <option value="todos">TODOS</option>
      <option value="pessoal">PESSOAL</option>
      <option value="profissional">PROFISSIONAL</option>
    </select>

    ESTADO:
    <select id="sltStatus" v-model="status">
      <option value="todos">TODOS</option>
      <option value="não iniciado">NÃO INICIADO</option>
      <option value="iniciado">INICIADO</option>
      <option value="finalizado">FINALIZADO</option>
    </select>


    <table v-if="store.getFilteredTodos(type, status).length">
      <tr>
        <th>TAREFA</th>
        <th>DETALHE</th>
        <th>OPÇÕES</th>
      </tr>
      <tr v-for="todo in store.getFilteredTodos(type, status)">
        <td>{{ todo.name }}</td>
        <td>
          <RouterLink :to="{ name: 'todo', params: { todoid: todo.id } }">
            ver mais...
          </RouterLink>
        </td>
        <td>
          <button @click="store.setStatus(todo.id)" v-show="todo.status != 'finalizado'">
            {{
                (todo.status == 'não iniciado') ? 'INICIAR' : 'FINALIZAR'
            }}
          </button>
        </td>
      </tr>
    </table>
    <div v-else>
      SEM TAREFAS
    </div>

    <button @click="this.$router.push({ name: 'add' })">ADICIONAR</button>

  </div>
</template>
