export default {
  namespaced: true,
  state: {
    map: {
      fields: []
    }
  },
  actions: {
    async get({ state, commit }, worldId) {
      let response = await window.axios.get('api/world/' + worldId + '/map')

      commit('setMap', response.data.data.map)
    },
  },
  mutations: {
    setMap(state, map) {
      state.map = map
    },
  }
}
