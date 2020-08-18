/**
 * This plugins is used to handle error from Axios
 * @param $axios
 * @param store
 */
export default function ({$axios, store, redirect}) { // We get $axios and store from context global variable
  $axios.onError((error) => {
    if (error.response.status === 422)
    {
      store.dispatch("validation/setErrors", error.response.data);
      // return redirect("/login");
    }
    return Promise.reject(error)
  });

  $axios.onRequest(() => {
    store.dispatch("validation/clearErrors");
  })
}
