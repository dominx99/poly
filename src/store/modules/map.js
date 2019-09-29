import store from './../index'
import Vue from 'vue'

export default {
  namespaced: true,
  state: {
    map: {
      fields: [],
      map_objects: []
    }
  },
  actions: {
    async get ({ commit }, worldId) {
      let response = await window.axios.get('api/world/' + worldId + '/map')

      commit('setMap', response.data.data.map)
    },
    async put ({}, { fieldId }) {
      let cost = store.state.unit.selected.cost

      let res = await window.axios.post('api/map/put', {
        field_id: fieldId,
        map_id: store.state.map.map.id,
        user_id: store.state.user.user.id,
        unit_id: store.state.unit.selected.id,
        type: store.state.unit.selected.type
      })

      if (res.status === 200) {
        store.commit('user/reduceGold', cost)
      }
    }
  },
  mutations: {
    setMap (state, map) {
      state.map = map
    },
    placeMapObject (state, mapObject) {
      let foundMapObject = state.map.map_objects.find(searchMapObject => {
        return mapObject.field_id === searchMapObject.field_id
      })

      if (foundMapObject) {
        Vue.delete(state.map.map_objects, state.map.map_objects.indexOf(foundMapObject))
      }

      state.map.map_objects.push(mapObject)
    },
    takeOverField (state, { fieldId, userId }) {
      let field = state.map.fields.find(field => {
        return field.id === fieldId
      })

      if (! field) {
        return
      }

      Vue.set(
        state.map.fields,
        state.map.fields.indexOf(field),
        Object.assign({}, field, { user_id: userId })
      )
    }
  }
}
