import Vue from 'vue';
import {mapGetters} from 'vuex';

/**
 * This instance will provide Getter Globaly without having to import it on each file
 * @type {{install(*, *): void}}
 */
const Validation = {
  install(Vue, options) {
    Vue.mixin({
      computed: {
        ...mapGetters({
            errors: "validation/errors" // refer to "store/validation"
        })
      }
    });
  }
};

Vue.use(Validation);
