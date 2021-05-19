import Vue from 'vue'

export const state = () => {
  return {
    messages: [],
    areas: [],
    roles: []
  }
}

export const mutations = {
  addMessage(state, message) {
    const messages = state.messages
    messages.push(message)
    Vue.set(state, 'messages', messages)
  },
  setAreas(state, areas) {
    Vue.set(state, 'areas', areas)
  },
  setRoles(state, roles) {
    Vue.set(state, 'roles', roles)
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
    commit('setAreas', (await this.$axios.get('/api/areas')).data)
    commit('setRoles', (await this.$axios.get('/api/roles')).data)
  }
}
