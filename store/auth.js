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
    return state.user
  }
};
