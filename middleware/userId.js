import axios from 'axios';
export default async function ({ store, redirect, route  }) {
  try {
    let user = await axios.get('https://reqres.in/api/users?id=' + route.params.id);
    store.dispatch("users/getUserById", user.data.data);
  } catch (e) {
    return redirect('/error');
  }
}
