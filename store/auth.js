/*
 Below a way to resolve the error "[vuex] duplicate namespace auth/ for the namespaced module auth"
 Disabled for instance
export const getters = {
  authenticated(state, getters, rootState) {
    return rootState.auth.loggedIn;
  },

  user(state, getters, rootState) {
    return rootState.auth.user
  }
};*/
export const getters = {

/**
* Return from the store the status of an account
* @param state
* @returns {boolean}
*/
  authenticated(state) {
    return state.loggedIn;
  },

  /**
  * return from the store the current user logged
  * @param state
  */
  user(state) {
    return state.user;
  }
};
