import axios from "axios";

const todoDatalist = "http://localhost:3888/todos"

export const getAllTodoData = async () => {
  const responce = await axios.get(todoDatalist)
  return responce.data
}

export const addTodoData = async (todo) => {
  const responce = await axios.post(todoDatalist, todo)
  return responce.data
}

export const deleteTodoData = async (id) => {
  await axios.delete(`${todoDatalist}/${id}`)
  return id
}

export const updateTodoData = async (id, todo) => {
  const responce = await axios.put(`${todoDatalist}/${id}`, todo)
  return responce.data
}
