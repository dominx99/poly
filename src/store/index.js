import Vuex from 'vuex'
import Vue from 'vue'
import auth from './modules/auth'
import user from './modules/user'
import world from './modules/world'
import map from './modules/map'
import army from './modules/army'
import building from './modules/building'
import unit from './modules/unit'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    auth,
    user,
    world,
    map,
    army,
    building,
    unit
  }
})

export default store;
