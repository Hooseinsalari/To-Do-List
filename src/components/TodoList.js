import React from "react";

// style
import styles from "./TodoList.module.css";

const TodoList = ({ todos, setTodos }) => {
  const deleteHandler = (id) => {
    const filterTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filterTodos);
  };

  const completeHandler = (id) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex((todo) => todo.id === id);
    let selectedTodo = newTodos[index];
    selectedTodo.isComplete = !selectedTodo.isComplete;
    console.log(todos);
    setTodos(newTodos);
  };

  return (
    <div className={styles.container}>
      <div className={styles.todos}>
        {todos.map((todo) => (
          <div key={todo.id} className={styles.todo}>
            <div>
              <p onClick={() => completeHandler(todo.id)}>{todo.title}</p>
            </div>
            <div>
              <button>edit</button>
              <button onClick={() => deleteHandler(todo.id)}>delete</button>
            </div>
          </div>
        ))}
      </div>
      {
        todos.length ?
        <div className={styles.footer}>
          <p>salam</p>
        </div> : null
      }
    </div>
  );
};

export default TodoList;
