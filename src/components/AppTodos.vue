
<template>
  <div>
    <App-add-todo
      v-on:add="addTodo"
      v-on:update="updateTodo">
    </App-add-todo>
    <App-todos-list
      :todos="todos"
      v-on:update="updateTodo"
      v-on:remove="removeTodo"
    >
    </App-todos-list>
  </div>
</template>

<script>
import AppTodosList from './AppTodosList'
import AppAddTodo from './AppAddTodo'

export default {
  name: 'app-todos',
  components: {
    'App-add-todo': AppAddTodo,
    'App-todos-list': AppTodosList
  },
  data () {
    return {
      todos: [
        {
          id: 0,
          name: 'test',
          author: 'test'
        }
      ]
    }
  },
  methods: {
    addTodo (todo) {
      console.log('add', todo)
      this.todos = [...this.todos, { ...todo, id: this.todos.length }]
    },
    updateTodo (todo) {
      console.log('upadete', todo)
      this.todos = this.todos.map(_todo => _todo.id !== todo.id ? _todo : todo)
    },
    removeTodo (todo) {
      console.log('remove', todo)
      this.todos = this.todos.filter(_todo => _todo.id !== todo.id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
