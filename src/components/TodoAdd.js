
export const TodoAdd =  ({ inputEl, handleAddTodoListItem }) => {
  return (
    <>
      <textarea ref={inputEl}/>

      <button onClick={handleAddTodoListItem}>+TODO追加</button>
    </>
  )
}