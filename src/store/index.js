// 存有所有的全局数据 和 Context
import { createContext } from "react"

export const store = {
  user: null,
  books: null,
  movies: null,
}

export const Context = createContext(null)
