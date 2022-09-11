import { useReducer } from "react"
import { store, Context } from "./store"
import { reducer } from "./store/reducers"
import { User } from "./components/User/User"
import { Books } from "./components/Books/Books"
import { Movies } from "./components/Movies/Movies"

function App() {
  const [state, dispatch] = useReducer(reducer, store)

  return (
    <Context.Provider value={{ state, dispatch }}>
      <User />
      <hr />
      <Books />
      <Movies />
    </Context.Provider>
  )
}

export default App
