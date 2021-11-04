import { useState, useEffect } from 'react'
import {ulid} from "ulid";

import * as TodoData from '../api/todo'

export const useTodo = () => {

  const [todoList, setTodoList] = useState([])

  useEffect(() => {
    TodoData.getAllTodoData().then((todo) => {
      setTodoList([...todo].reverse())
    });
  }, [])

  const toggleTodoListItemStatus = (id, done) => {
    const todoItem = todoList.find((todo) => todo.id === id)
    const newTodoItem = { ...todoItem, done: !done};

    TodoData.updateTodoData(id, newTodoItem).then((updatedTodo) => {
      const newTodoList = todoList.map((item) =>
        item.id !== updatedTodo.id ? item : updatedTodo
      )
      setTodoList(newTodoList)
    })
  }

  const addTodoListItem = (todoContent) => {
    const newTodoItem = {
      content: todoContent,
      id: ulid(),
      done: false
    }

    TodoData.addTodoData(newTodoItem).then((addTodo) => {
      setTodoList([addTodo, ...todoList])
    })
  }

  const deleteTodoListItem = (id) => {
    TodoData.deleteTodoData(id).then((deletedItemId) => {
      const newTodoist = todoList.filter(
        (item) => item.id !== deletedItemId
      )
      setTodoList(newTodoist)
    })
  }


  return {
    todoList,
    toggleTodoListItemStatus,
    addTodoListItem,
    deleteTodoListItem
  }
}