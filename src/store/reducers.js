// 合并所有的 reducer

import userReducer from "../components/User/userReducer"
import booksReducer from "../components/Books/booksReducer"
import moviesReducer from "../components/Movies/moviesReducer"

const obj = {
  ...userReducer,
  ...booksReducer,
  ...moviesReducer,
}
export const reducer = (state, action) => {
  const fn = obj[action.type]
  if (fn) {
    return fn(state, action)
  } else {
    console.error("wrong type")
  }
}
