import Vue from 'vue'
import Vuex from 'vuex'

import kids from "./modules/kids"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    kids
  }
})
