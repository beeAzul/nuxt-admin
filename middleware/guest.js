export default function({store, redirect}) {
  // If user are authenticated
  if (store.getters['auth/authenticated']) {
    return redirect('/profile')
  }
}
