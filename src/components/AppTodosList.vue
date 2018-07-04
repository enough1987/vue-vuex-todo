
<template>
  <div>
    <div v-for="todo in todos" :key="todo.id">
      <App-todo
        :data="{ todo, mode: false }"
        v-on:update="updateTodo"
        v-on:remove="removeTodo"
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
  },
  methods: {
    updateTodo (todo) {
      this.$emit('update', todo)
    },
    removeTodo (todo) {
      this.$emit('remove', todo)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
