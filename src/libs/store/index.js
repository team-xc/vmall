import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import * as actions from "./actions";
import * as mutations from "./mutations";
import createVuexAlong from "vuex-along";

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  actions,
  mutations,
  plugins: [createVuexAlong({
    name: "vmall"
  })]
});