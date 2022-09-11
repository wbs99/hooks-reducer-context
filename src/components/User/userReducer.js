export default {
  setUser: (state, action) => {
    return { ...state, user: action.user }
  },
  addUser: (state, action) => {
    return { ...state, user: [...state.user, action.user] }
  },
}
