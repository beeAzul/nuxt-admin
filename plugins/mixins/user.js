import Vue from 'vue';
import {mapGetters} from 'vuex';

/**
 * This instance will provide Getter Globaly without having to import it on each file
 * @type {{install(*, *): void}}
 */
const User = {
  install(Vue, options) {
    Vue.mixin({
      computed: {
        ...mapGetters("auth", {
            user: "user", // refer to "store/user()"
            authenticated: "authenticated"
        })
      }
    });
  }
};

Vue.use(User);
