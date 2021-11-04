import { useTodo } from '../hooks/useTodo'

const TodoTitle = ({title, as}) => {
  if(as === 'h1') return <h1>{title}</h1>
  if(as === 'h2') return <h2>{title}</h2>
  return <p>{title}</p>
}

const TodoItem = ({todo}) => {
  return (
    <li>
      {todo.content}
      <button>{todo.done ? "完了リスト" : "未完了リスト"}</button>
      <button>削除</button>
    </li>
  )
}

const TodoItemList = ({todolist}) => {
  return (
    <ul>
      {todolist.map((todo) => (
          <TodoItem todo={todo} key={todo.id}/>
      ))}
    </ul>
  )
}

function App() {

  const { todoList }  = useTodo()

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
      <TodoTitle title="TODO進捗管理" as="h1"/>

      <textarea />

      <button>+TODO追加</button>

      <TodoTitle title="未完了TODOリスト" as="h2"/>
      <TodoItemList todolist={inCompletedList}/>

      <TodoTitle title="完了TODOリスト" as="h2"/>
      <TodoItemList todolist={completedList}/>
    </>
  );
}

export default App;
