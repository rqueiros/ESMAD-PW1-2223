import { createRouter, createWebHistory } from 'vue-router'
import TodosView from '../views/TodosView.vue'
import AddView from '../views/AddView.vue'
import TodoView from '../views/TodoView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'todos',
      component: TodosView
    },
    {
      path: '/add',
      name: 'add',
      component: AddView
    },
    {
      path: '/todos/:todoid',
      name: 'todo',
      component: TodoView
    }

  ]
})

export default router
