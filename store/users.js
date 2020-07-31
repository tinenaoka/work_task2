function state() {
  return {
    users: [],
    user: [],
  }
}
const mutations = {
  getUsers(state, data) {
    state.users = data;
  },
  getUserById(state, data) {
    state.user = data;
  },
  deleteUser(state, data) {
    let newUsers = [];
    state.users.data.map(item => {
      if (item.id !== data) {
        newUsers.push(item);
      }
    });
    state.users.data = newUsers;
  },
  deleteUserSinge(state) {
    state.user = [];
  },
  addUser(state, data) {
    state.users.data.push(data);
  }
};
const actions = {
  async getUsers({ commit }, page) {
    let data = await this.$axios.$get('https://reqres.in/api/users?page=' + page);
    commit('getUsers', data);
    return data;
  },
  async getDataUsers({ commit }, page) {
    return await this.$axios.$get('https://reqres.in/api/users?page=' + page);;
  },
  async getUserById({ commit }, data) {
    commit('getUserById', data);
  },
  deleteUser({ commit }, id) {
    commit('deleteUser', id);
  },
  deleteUserSinge({ commit }) {
    commit('deleteUserSinge');
  },
  addUser({ commit }, data) {
    commit('addUser', data);
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
