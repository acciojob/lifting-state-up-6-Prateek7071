import React from "react"
function TodoList({ todos, handleComplete }){
  return (
    <div>
      <h2>Child Component</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.key}>
            <label>{todo.label}</label>
            {!todo.Complete && (
              <button onClick={(e)=>handleComplete(todo.key)}>Complete</button>
            )}
          </li>
        ))}
      </ul>
    </div>
    
  )
}

export default TodoList;