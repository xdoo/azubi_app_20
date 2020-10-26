import Kid from "@/model/Kid"

const state = {
  kids: Array<Kid>()
}

const getters = {
  getKids (state: any) {
    return state.kids
  },
  isEmpty (state: any) {
    if(Array.isArray(state.kids) && state.kids.length) {
      return false
    } else {
      return true
    }
  }
}

const mutations = {
  addKid (state: any, payload: Kid) {
    state.kids.push(payload)
  },
  removeKid (state: any, payload: string) {
    state.kids.forEach((kid: Kid, index: number) => {
      if(kid.firstname === payload) state.kids.splice(index, 1)
    });
  }
}

const actions = {
  addKid (context: any, payload: Kid) {
    context.commit("addKid", payload)
  },
  removeKid (context: any, firstname: string) {
    context.commit("removeKid", firstname)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}