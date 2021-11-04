export const TodoItem =
  ({todo, toggleTodoListItemStatus, deleteTodoListItem}) => {
    const handleToggleListItemStatus = () => toggleTodoListItemStatus(todo.id, todo.done)
    const handleDeleteTodoListItems = () => deleteTodoListItem(todo.id)

    return (
      <li>
        {todo.content}
        <button onClick={handleToggleListItemStatus}>{todo.done ? "未完了リスト" : "完了リスト"}</button>
        <button onClick={handleDeleteTodoListItems}>削除</button>
      </li>
    )
  }
