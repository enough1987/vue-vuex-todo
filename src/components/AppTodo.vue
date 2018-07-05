
<template>
  <div>
    <div>
      <p class="inline-block"
        v-if="!editeble"
        v-on:click="changeClick"
      >
       {{ todo }}
      </p>
      <p class="inline-block"
        v-if="editeble"
      >
        <input type="text" v-model="newTodo.name">
        <input type="text" v-model="newTodo.author">
        <button v-on:click="updateTodo(newTodo)"> update </button>
      </p>
      <button v-on:click="removeTodo(todo)"> remove </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-todo',
  props: {
    todo: Object
  },
  data () {
    return {
      newTodo: { ...this.todo },
      editeble: false
    }
  },
  methods: {
    changeClick () {
      this.editeble = !this.editeble
    },
    updateTodo (newTodo) {
      if (!this.validateTodo(newTodo)) {
        return
      }

      this.$store.commit({
        type: 'todos/updateTodo',
        action: newTodo
      })

      this.changeClick()
    },
    removeTodo (todo) {
      this.$store.commit({
        type: 'todos/removeTodo',
        action: todo
      })
    }
  },
  watch: {
    todo: function (newVal, oldVal) {
      this.newTodo = {...newVal}
      this.editeble = false
    }
  },
  inject: ['validateTodo']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .inline-block {
    display: inline-block;
  }

</style>
