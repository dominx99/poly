export default {
  namespaced: true,
  state: {
    list: []
  },
  actions: {
    async fetchArmyUnits({ commit }, mapId) {
      let response = await window.axios.get('api/map/' + mapId + '/army-units')

      commit('setArmies', response.data.data)
    },
  },
  mutations: {
    setArmies(state, armies) {
      state.list = armies
    },
  }
}
