export default {
  namespaced: true,
  state: {
    selected: {}
  },
  mutations: {
    setSelected (state, { id, type, cost }) {
      state.selected = { id, type, cost }
    },
    clearSelected (state) {
      state.selected = {}
    }
  }
}
