import React from "react";

// style
import styles from "./TodoList.module.css";

// icons
import { FaTimes, FaCheck, FaRegEdit } from "react-icons/fa";

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
          <div key={todo.id} className={todo.isComplete ? styles.todoComplete :styles.todo}>
            <div className={todo.isComplete ? styles.todoLeftComplete : styles.todoLeft}>
              <button
                className={styles.checkBtn}
                onClick={() => completeHandler(todo.id)}
              >
                <FaCheck className={styles.checkIcon} />
              </button>
              <p onClick={() => completeHandler(todo.id)}>{todo.title}</p>
            </div>
            <div className={styles.todoRight}>
              <button className={styles.editBtn}><FaRegEdit className={styles.editIcon} /></button>
              <button
                className={styles.deleteBtn}
                onClick={() => deleteHandler(todo.id)}
              >
                <FaTimes className={styles.deleteIcon} />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div>
      {todos.length ? (
        <div className={styles.footer}>
          <p>salam</p>
        </div>
      ) : null}
      </div>
    </div>
  );
};

export default TodoList;
