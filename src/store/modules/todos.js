
// initial state
const state = {
  todos: []
}

// getters
const getters = {
  getTodos: state => {
    return state.todos
  }
}

// mutations
const mutations = {
  setTodos (state, payload) {
    state.todos = payload.action
  },
  addTodo (state, payload) {
    state.todos = [...state.todos, payload.action]
  },
  updateTodo (state, payload) {
    state.todos = state.todos.map(todo => todo.id === payload.action.id
      ? {...payload.action}
      : todo)
  },
  removeTodo (state, payload) {
    state.todos = state.todos.filter(todo => todo.id !== payload.action.id)
  }
}

// actions
const actions = {
  getInitialState ({ commit }) {
    setTimeout(() => {
      commit({
        type: 'setTodos',
        action: [
          {
            id: Date.now() + '/' + Math.random().toFixed(5),
            name: 'test',
            author: 'test'
          }
        ]
      }, 1000)
    })
  },
  addTodoAction ({ commit }, payload) {
    const id = Date.now() + '/' + Math.random().toFixed(5)
    commit({
      type: 'addTodo',
      action: { id, ...payload.action }
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
