
<template>
  <div>
    <div v-for="todo in todos" :key="todo.id">
      {{ todo }}
      <button v-on:click="$emit('remove', todo)"> remove </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-todos',
  props: {
    todos: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
