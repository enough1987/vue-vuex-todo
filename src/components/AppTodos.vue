
<template>
  <div>
    <App-add-todo>
    </App-add-todo>
    <App-todos-list
      :todos="todos"
    >
    </App-todos-list>
  </div>
</template>

<script>
import AppTodosList from './AppTodosList'
import AppAddTodo from './AppAddTodo'
import { mapGetters } from 'vuex'

export default {
  name: 'app-todos',
  components: {
    'App-add-todo': AppAddTodo,
    'App-todos-list': AppTodosList
  },
  computed: {
    ...mapGetters('todos', {
      todos: 'getTodos'
    })
  },
  methods: {
    validateTodo (todo) {
      if (!todo.name || !todo.author) {
        return false
      }
      return true
    }
  },
  provide: function () {
    return {
      validateTodo: this.validateTodo
    }
  },
  created () {
    this.$store.dispatch('todos/getInitialState')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
