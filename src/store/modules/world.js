export default {
  namespaced: true,
  state: {
    world: {
      status: 'loading'
    }
  },
  actions: {
    async get({ commit }, id) {
      console.log('world/get')
      let response = await window.axios.get('api/world/' + id)
      console.log('world/got')

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
