import { useContext, useEffect } from "react"
import { ajax } from "../../ajax"
import { Context } from "../../store"

export const Books = () => {
  const { state, dispatch } = useContext(Context)

  useEffect(() => {
    ajax("/books").then(books => {
      dispatch({ type: "setBooks", books: books })
    })
  }, [])

  const addUser = () => {
    ajax("/user/add").then(user => {
      dispatch({ type: "addUser", user: user })
    })
  }

  return (
    <div>
      <h1>我的书籍</h1>
      <ol>
        {state.books
          ? state.books.map(book => <li key={book.id}>{book.name}</li>)
          : "加载中"}
      </ol>
      <hr />
      <div>
        这是 Movies 组件的内容
        <ol>
          {state.movies
            ? state.movies.map(movie => {
                return <li key={movie.id}>{movie.name}</li>
              })
            : "加载中"}
        </ol>
      </div>
      <hr />
      <div>
        <button onClick={addUser}>为 User 组件添加用户</button>
      </div>
    </div>
  )
}
