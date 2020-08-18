/**
 * this middleware allows to clear errors when we switch pages
 * @param store
 */
export default function ({store}) {
  store.dispatch("validation/clearErrors");
}
