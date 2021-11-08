import { List } from '@chakra-ui/react'

import { TodoItem } from './TodoItem'
import {TodoTitle} from "./TodoTitle";

export const TodoList = ({
  title,
  as,
  fontSize,
  todolist,
  toggleTodoListItemStatus,
  deleteTodoListItem,
}) => {
  return (
    <>
      <TodoTitle title={title} as={as} fontSize={fontSize} mt="12"/>
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