import { useContext, useEffect } from "react"
import { ajax } from "../../ajax"
import { Context } from "../../store"

export const User = () => {
  const { state, dispatch } = useContext(Context)

  useEffect(() => {
    ajax("/user").then(user => {
      dispatch({ type: "setUser", user: user })
    })
  }, [])

  return (
    <div>
      <h1>个人信息</h1>
      {state.user
        ? state.user.map(user => {
            return <div key={user.id}>{user.name}</div>
          })
        : "加载中"}

      <hr />
      <div>
        这是书籍组件的内容
        <ol>
          {state.books
            ? state.books.map(book => {
                return <li key={book.id}>{book.name}</li>
              })
            : "加载中"}
        </ol>
      </div>
    </div>
  )
}
