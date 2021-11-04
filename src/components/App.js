import React, { useState, useEffect} from 'react'
import axios from "axios";

const todoDatalist = "http://localhost:3888/todos"

function App() {

  const [todoList, setTodolist] = useState([]);

  useEffect(() => {
    const fetchDate = async () => {
      const responce = await axios.get(todoDatalist)

      setTodolist(responce.data)
    };
    fetchDate()
  }, [])


  console.log("TODOリスト", todoList)

  const inCompletedList = todoList.filter((todo) => {
    return !todo.done
  })

  console.log("未完了リスト", inCompletedList)

  const completedList = todoList.filter((todo) => {
    return todo.done
  })

  console.log("完了リスト", completedList)

  return (
    <>
      <h1>TODO進捗管理</h1>

      <textarea />

      <button>+TODO追加</button>

      <h2>未完了TODOリスト</h2>
      <ul>
        { inCompletedList.map((todo) => (
            <li key={todo.id}>
              {todo.content}
              <button>{todo.done ? "完了リスト" : "未完了リスト"}</button>
              <button>削除</button>
            </li>
          ))
        }
      </ul>

      <h2>完了TODOリスト</h2>
      <ul>
        { completedList.map((todo) => (
            <li key={todo.id}>
              {todo.content}
              <button>{todo.done ? "完了リスト" : "未完了リスト"}</button>
              <button>削除</button>
            </li>
          ))
        }
      </ul>
    </>
  );
}

export default App;
