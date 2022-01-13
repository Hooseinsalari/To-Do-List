import React, { useEffect, useState } from "react";

// components
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

// style
import styles from "./TodoApp.module.css";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  // default value for category
  const [status, setStatus] = useState("all");

  const filterTodos = (status) => {
    switch (status) {
      case "complete":
        setFilteredTodos(todos.filter((todo) => todo.isComplete));
        break;
      case "uncomplete":
        setFilteredTodos(todos.filter((todo) => !todo.isComplete));
        break;
      default:
        setFilteredTodos(todos);
    }
  };

  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);

  return (
    <div className={styles.container}>
      <h1>To do app</h1>
      <TodoForm
        todos={todos}
        setTodos={setTodos}
        filterTodos={filterTodos}
        filteredTodos={filteredTodos}
        status={status}
        setStatus={setStatus}
      />
      <TodoList
        todos={filteredTodos}
        setTodos={setTodos}
        filterTodos={filterTodos}
        filteredTodos={filteredTodos}
        setStatus={setStatus}
      />
    </div>
  );
};

export default TodoApp;
