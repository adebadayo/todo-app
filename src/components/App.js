import { useTodo } from '../hooks/useTodo'
import {useRef} from "react";

const TodoTitle = ({title, as}) => {
  if(as === 'h1') return <h1>{title}</h1>
  if(as === 'h2') return <h2>{title}</h2>
  return <p>{title}</p>
}

const TodoItem =
  ({todo, toggleTodoListItemStatus, deleteTodoListItem}) => {
  const handleToggleListItemStatus = () => toggleTodoListItemStatus(todo.id, todo.done)
  const handleDeleteTodoListItems = () => deleteTodoListItem(todo.id)

  return (
    <li>
      {todo.content}
      <button onClick={handleToggleListItemStatus}>{todo.done ? "完了リスト" : "未完了リスト"}</button>
      <button onClick={handleDeleteTodoListItems}>削除</button>
    </li>
  )
}

const TodoList = ({todolist, toggleTodoListItemStatus, deleteTodoListItem}) => {
  return (
    <ul>
      {todolist.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            toggleTodoListItemStatus = {toggleTodoListItemStatus}
            deleteTodoListItem = {deleteTodoListItem}
          />
      ))}
    </ul>
  )
}

const TodoAdd = ({ inputEl, handleAddTodoListItem }) => {
  return (
    <>
      <textarea ref={inputEl}/>

      <button onClick={handleAddTodoListItem}>+TODO追加</button>
    </>
  )
}

function App() {

  const {
    todoList,
    addTodoListItem,
    toggleTodoListItemStatus,
    deleteTodoListItem
  }  = useTodo()

  const inputEl = useRef(null)

  const handleAddTodoListItem = () => {
    console.log(inputEl)
    if(inputEl.current.value === "") return

    addTodoListItem(inputEl.current.value)
    inputEl.current.value = ""
  }


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
      <TodoAdd
        inputEl={inputEl}
        handleAddTodoListItem = {handleAddTodoListItem}/>

      <TodoTitle title="未完了TODOリスト" as="h2"/>
      <TodoList
        todolist={inCompletedList}
        toggleTodoListItemStatus={toggleTodoListItemStatus}
        deleteTodoListItem={deleteTodoListItem}
      />

      <TodoTitle title="完了TODOリスト" as="h2"/>
      <TodoList
        todolist={completedList}
        toggleTodoListItemStatus={toggleTodoListItemStatus}
        deleteTodoListItem={deleteTodoListItem}
      />
    </>
  );
}

export default App;
