export default {
  namespaced: true,
  state: {
    list: []
  },
  actions: {
    async fetchArmies({ state, commit }, worldId) {
      let response = await window.axios.get('api/armies')

      commit('setArmies', response.data.data.armies)
    },
  },
  mutations: {
    setArmies(state, armies) {
      state.list = armies
    },
  }
}
