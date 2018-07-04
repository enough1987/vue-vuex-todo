
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
export default {
  name: 'app-add-todo',
  data () {
    return {
      todo: {}
    }
  },
  methods: {
    add () {
      if (!this.validateTodo(this.todo)) {
        return
      }

      this.addTodo({
        name: this.todo.name,
        author: this.todo.author
      })

      this.todo = {}
    }
  },
  inject: ['addTodo', 'validateTodo']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
