import { defineStore } from 'pinia'

export const TodoStore = defineStore('todo', {
  state: () => ({
    todos: [
      { id: 1, name: 'fazer os TPC', type: 'profissional', status: "não iniciado" },
      { id: 2, name: 'ir passear', type: 'pessoal', status: "não iniciado" },
      { id: 3, name: 'fazer projeto de PW1', type: 'profissional', status: "iniciado" },
    ],

  }),
  getters: {
    getTodos: (state) => state.todos,

    getFilteredTodos: (state) =>
      (type, status) =>
        state.todos.filter(todo =>
          (todo.status == status && todo.type == type) ||
          (status == 'todos' && type == 'todos') ||
          (status == 'todos' && todo.type == type) ||
          (todo.status == status && type == 'todos')
        ),

    getTodoById: (state) =>
      (id) => state.todos.find(todo => todo.id == id),
  },
  actions: {
    add(name, type) {
      this.todos.push({
        id: this.todos[this.todos.length - 1].id + 1,
        name: name,
        type: type,
        status: 'não iniciado'
      }
      )
    },
    setStatus(id) {
      const todo = this.todos.find(todo => todo.id == id)
      if (todo.status == 'não iniciado') {
        todo.status = 'iniciado'
      } else {
        todo.status = 'finalizado'
      }
    }

  }
})
