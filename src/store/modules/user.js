import Socket from '../../socket/index';

export default {
  namespaced: true,
  state: {
    user: {
      resources: {
        gold: 0
      }
    }
  },
  actions: {
    async get ({ commit }) {
      let response = await window.axios.get('api/user')

      commit('setUser', response.data.data)
      Socket.subscribeUser(response.data.data.id)
      Socket.subscribeWorld(response.data.data.world_id)
    },
    async fetchResources ({ commit }) {
      let response = await window.axios.get('api/user/resources')

      commit('setResources', response.data.data)
    },
    async fetchPlayers({ state, commit }) {
      let response = await window.axios.get('api/world/players?world_id=' + state.user.world_id)

      commit('setPlayers', response.data.data)
    }
  },
  mutations: {
    setUser (state, user) {
      state.user.id = user.id;
      state.user.email = user.email;
      state.user.world_id = user.world_id;
    },
    setResources (state, resources) {
      state.user.resources.gold = resources.gold
    },
    reduceGold (state, gold) {
      state.user.resources.gold -= gold
    },
    setPlayers (state, players) {
      state.players = players
    }
  }
}
