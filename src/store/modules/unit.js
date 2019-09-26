export default {
  namespaced: true,
  state: {
    selected: {}
  },
  mutations: {
    setSelected (state, { id, type }) {
      state.selected = { id, type }
    },
    clearSelected (state) {
      state.selected = {}
    }
  }
}
