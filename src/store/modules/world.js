export default {
  namespaced: true,
  state: {
    world: {
      status: 'loading'
    }
  },
  actions: {
    async get({ commit }, id) {
      let response = await window.axios.get('api/world/' + id)

      commit('setWorld', response.data.data.world)
    },
    join() {
      return window.axios.post('api/worlds')
    }
  },
  mutations: {
    setWorld(state, world) {
      state.world = world
    },
    setStatus(state, status) {
      state.world.status = status
    }
  }
}
