export const state = () => ({
  errors: {}
});

/**
 * Return error from state
 * @type {{errors(*): *}}
 */
export const getters = {
  errors(state) {
    return state.errors;
  }
};

/**
 * Set data to the store. It is fired by actions
 * @type {{SET_VALIDATION_ERROR(*, *): void}}
 */
export const mutations = {
  SET_VALIDATION_ERRORS(state, errors) {
    state.errors = errors;
  }
};

/**
 * Actions used to set data to the store.
 * @type {{setErrors({commit: *}, *=): void}}
 */
export const actions = {
  // Methods called when we want to dispatch the action to set error to the state
  setErrors({commit}, errors) {
    commit("SET_VALIDATION_ERRORS", errors)
  },
  clearErrors({commit}) {
    // we send empty object to clear the errors store
    commit("SET_VALIDATION_ERRORS", {})
  }
};
