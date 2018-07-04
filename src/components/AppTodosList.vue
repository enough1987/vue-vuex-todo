
<template>
  <div>
    <div v-for="todo in todos" :key="todo.id">
      <App-todo
        :todo="todo"
      >
      </App-todo>
    </div>
  </div>
</template>

<script>
import AppTodo from './AppTodo'

export default {
  name: 'app-todos',
  components: {
    'App-todo': AppTodo
  },
  props: {
    todos: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
