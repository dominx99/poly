export default {
  namespaced: true,
  state: {
    token: localStorage.getItem('token') || ''
  },
  actions: {
    login({ commit }, params) {
      return window.axios.post('api/auth/login', {
        email: params.email,
        password: params.password
      })
    },
    register({ commit }, params) {
      return window.axios.post('api/auth/register', {
        email: params.email,
        password: params.password
      })
    }
  }
}
