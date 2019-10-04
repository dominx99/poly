export default {
  namespaced: true,
  state: {
    list: []
  },
  actions: {
    async fetchBuildingUnits({ commit }, mapId) {
      let response = await window.axios.get('api/map/' + mapId + '/building-units')

      commit('setBuildings', response.data.data)
    },
  },
  mutations: {
    setBuildings(state, buildings) {
      state.list = buildings
    },
  }
}
