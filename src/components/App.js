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

  return (
    <>
      <h1>TODO進捗管理</h1>

      <textarea />

      <button>+TODO追加</button>

      <h2>TODOリスト</h2>
      <ul>
        { todoList.map((todo) => (
            <li key={todo.id}>
              {todo.content} ({todo.done ? '完了' : '未完了'})
            </li>
          ))
        }
      </ul>
    </>
  );
}

export default App;
