import Vuex from 'vuex'
import Vue from 'vue'
import auth from './modules/auth'
import user from './modules/user'
import world from './modules/world'
import map from './modules/map'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    auth,
    user,
    world,
    map
  }
})

export default store;
