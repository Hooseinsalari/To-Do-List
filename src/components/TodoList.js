import React from "react";

const TodoList = ({ todos, setTodos }) => {

    const deleteHandler = (id) => {
        const filterTodos = todos.filter((todo) => todo.id !== id)
        setTodos(filterTodos)
    }

    const completeHandler = (id) => {
        const newTodos = [...todos]
        const selectedTodo = newTodos.findIndex((todo) => todo.id === id)
        let isCompleted = todos[selectedTodo]
        isCompleted.isComplete = !isCompleted.isComplete;
        setTodos(newTodos)
        console.log(todos)
    }

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          {/* <button onClick={() => completeHandler(todo.id)}><p>{todo.title}</p></button> */}
          <p onClick={() => completeHandler(todo.id)}>{todo.title}</p>
          <button>edit</button>
          <button onClick={() => deleteHandler(todo.id)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
