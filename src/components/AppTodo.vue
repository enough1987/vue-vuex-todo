
<template>
  <div>
    <div>
      <p class="inline-block"
        v-if="!editeble"
        v-on:click="changeClick"
      >
       {{ data.todo }}
      </p>
      <p class="inline-block"
        v-if="editeble"
      >
        <input type="text" v-model="newTodo.name">
        <input type="text" v-model="newTodo.author">
        <button v-on:click="updateTodo(newTodo)"> update </button>
      </p>
      <button v-on:click="removeTodo(data.todo)"> remove </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-todo',
  props: {
    data: Object
  },
  data () {
    return {
      newTodo: { ...this.data.todo },
      editeble: this.data.mode
    }
  },
  methods: {
    changeClick () {
      this.editeble = !this.editeble
    }
  },
  watch: {
    data: function (newVal, oldVal) {
      console.log('Prop changed: ', newVal, ' | was: ', oldVal)
      this.newTodo = newVal.todo
      this.editeble = newVal.mode
    }
  },
  inject: ['updateTodo', 'removeTodo']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .inline-block {
    display: inline-block;
  }

</style>
