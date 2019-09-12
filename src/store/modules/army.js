export default {
  namespaced: true,
  state: {
    list: []
  },
  actions: {
    async fetchBaseArmies({ commit }, mapId) {
      let response = await window.axios.get('api/map/' + mapId + '/base-armies')

      commit('setArmies', response.data.data)
    },
  },
  mutations: {
    setArmies(state, armies) {
      state.list = armies
    },
  }
}
