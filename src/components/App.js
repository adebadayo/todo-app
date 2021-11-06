import {useRef} from "react";
import { Container } from "@chakra-ui/react"
import { AddIcon } from "@chakra-ui/icons"

import { useTodo } from '../hooks/useTodo'

import { TodoAdd } from '../components/TodoAdd'
import { TodoTitle } from '../components/TodoTitle'
import { TodoList } from '../components/TodoList'

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
    <Container centerContent p={{base: "4", md: "6"}} maxWidth="3x1">
      <TodoTitle title="TODO進捗管理" as="h1"/>
      <TodoAdd
        inputEl={inputEl}
        handleAddTodoListItem = {handleAddTodoListItem}/>

      <TodoList
        todolist={inCompletedList}
        toggleTodoListItemStatus={toggleTodoListItemStatus}
        deleteTodoListItem={deleteTodoListItem}
        title = "未完了TODOリスト"
        as = "h2"
      />

      <TodoList
        todolist={completedList}
        toggleTodoListItemStatus={toggleTodoListItemStatus}
        deleteTodoListItem={deleteTodoListItem}
        title = "完了TODOリスト"
        as = "h2"
      />
    </Container>
  );
}

export default App;
