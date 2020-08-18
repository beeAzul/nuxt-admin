export const state = () => ({
  errors: {},
  message: {}
});

/**
 * Return error from state
 * @type {{errors(*): *}}
 */
export const getters = {
  errors(state) {
    return state.errors;
  },
  message(state) {
    return state.message;
  }
};

/**
 * Set data to the store. It is fired by actions
 * @type {{SET_VALIDATION_ERROR(*, *): void}}
 */
export const mutations = {
  SET_VALIDATION_ERRORS(state, data) {
    state.errors = data.errors;
    state.message = data.message;
  }
};

/**
 * Actions used to set data to the store.
 * @type {{setErrors({commit: *}, *=): void}}
 */
export const actions = {
  // Methods called when we want to dispatch the action to set error to the state
  setErrors({commit}, data) {
    commit("SET_VALIDATION_ERRORS", data)
  },
  clearErrors({commit}) {
    // we send empty object to clear the errors store
    commit("SET_VALIDATION_ERRORS", {
      errors: {},
      message: ''
    })
  }
};
