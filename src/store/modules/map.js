export default {
  namespaced: true,
  state: {
    map: {
      fields: []
    }
  },
  actions: {
    async get({ state, commit }, worldId) {
      console.log('map/get')
      let response = await window.axios.get('api/map/' + worldId)
      console.log('map/got')

      commit('setMap', response.data.data.map)
    },
  },
  mutations: {
    setMap(state, map) {
      state.map = map
    },
  }
}
