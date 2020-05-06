import ReactiveState from 'reactive-state-handler';

export default new ReactiveState({
  loggedIn: false,
  user: null,
  darkMode: false,
  jwt: '',
});
