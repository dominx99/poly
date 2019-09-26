import store from './../index'

export default {
  namespaced: true,
  state: {
    map: {
      fields: []
    }
  },
  actions: {
    async get ({ commit }, worldId) {
      let response = await window.axios.get('api/world/' + worldId + '/map')

      commit('setMap', response.data.data.map)
    },
    put ({}, { fieldId }) {
      window.axios.post('api/map/put', {
        field_id: fieldId,
        map_id: store.state.map.map.id,
        user_id: store.state.user.user.id,
        unit_id: store.state.unit.selected.id,
        type: store.state.unit.selected.type
      })
    }
  },
  mutations: {
    setMap (state, map) {
      state.map = map
    },
  }
}
