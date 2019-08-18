import Socket from '../../socket/index';

export default {
  namespaced: true,
  state: {
    user: {}
  },
  actions: {
    async get({ commit }) {
      let response = await window.axios.get('api/user')

      commit('setUser', response.data.data)
      Socket.subscribeUser(response.data.data.id)
      Socket.subscribeWorld(response.data.data.world_id)
    }
  },
  mutations: {
    setUser(state, user) {
      state.user.id = user.id;
      state.user.email = user.email;
      state.user.world_id = user.world_id;
    }
  }
}
