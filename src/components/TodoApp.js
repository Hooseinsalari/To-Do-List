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

  useEffect(() => {
    filterTodos(status)
  }, [todos, status])

  // -------

  const addTodoHandler = (input) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isComplete: false,
    };
    setTodos([...todos, newTodo]);
  };

  // -------

  const deleteHandler = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  // --------

  const completeHandler = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.isComplete = !selectedTodo.isComplete;
    const updateTodos = [...todos];
    updateTodos[index] = selectedTodo;
    setTodos(updateTodos);
  };

  // --------

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

  // useEffect(() => {
  //   setFilteredTodos(todos);
  // }, [todos]);

  return (
    <div className={styles.container}>
      <h1>To do app</h1>
      <TodoForm
        todos={todos}
        filterTodos={filterTodos}
        status={status}
        setStatus={setStatus}
        addTodoHandler={addTodoHandler}
      />
      <TodoList
        todos={filteredTodos}
        onDelete={deleteHandler}
        onComplete={completeHandler}
        unCompleteTodos={todos.filter((todo) => !todo.isComplete).length}
      />
    </div>
  );
};

export default TodoApp;
