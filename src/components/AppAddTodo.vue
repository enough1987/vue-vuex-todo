
<template>
  <div>
    <div>
      <input type="text" v-model="todo.name" />
      <input type="text" v-model="todo.author" />
      <button v-on:click="add" > add </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'app-add-todo',
  data () {
    return {
      todo: {}
    }
  },
  methods: {
    ...mapActions('todos', [
      'addTodoAction'
    ]),
    add () {
      if (!this.validateTodo(this.todo)) {
        return
      }

      this.addTodoAction({
        type: 'todos/addTodoAction',
        action: {
          name: this.todo.name,
          author: this.todo.author
        }
      })

      this.todo = {}
    }
  },
  inject: ['validateTodo']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
