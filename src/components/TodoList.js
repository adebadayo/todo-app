import { List } from '@chakra-ui/react'

import { TodoItem } from './TodoItem'
import {TodoTitle} from "./TodoTitle";

export const TodoList = ({
  todolist,
  toggleTodoListItemStatus,
  deleteTodoListItem,
  title,
  as
}) => {
  return (
    <>
      <TodoTitle title={title} as={as}/>
      <List w="full">
        {todolist.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            toggleTodoListItemStatus = {toggleTodoListItemStatus}
            deleteTodoListItem = {deleteTodoListItem}
          />
        ))}
      </List>
    </>
  )
}