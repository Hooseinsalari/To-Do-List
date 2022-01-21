import React, { useState } from "react";

// style
import styles from "./TodoForm.module.css";

// icons
import { FaPlusCircle } from "react-icons/fa";

import {netlify, notify} from "./Toastify"

const TodoForm = ({ addTodoHandler, todos, filterTodos, setStatus, status }) => {
  const [todo, setTodo] = useState("");

  const inputHandler = (event) => {
    setTodo(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault()
    if (!todo) {
      notify("error", "Please add your todo")
      return;
    }
    addTodoHandler(todo);
    setTodo("");
  };

  const cateHandler = (event) => {
    // console.log(event.target.name)
    setStatus(event.target.name);
    filterTodos(event.target.name);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler}>
        <div className={styles.upSection}>
          <button type="submit" className={styles.addBtn}>
            <FaPlusCircle className={styles.addIcon} />
          </button>
          <input
            placeholder="add todo ..."
            type="text"
            value={todo}
            onChange={inputHandler}
            className={styles.input}
          />
        </div>
      </form>
      <div className={styles.downSection}>
        {todos.length ? (
          <div className={styles.btnsContiner}>
            <button
              name="all"
              onClick={cateHandler}
              className={status === "all" ? styles.btnActive : styles.cateBtn}
            >
              All
            </button>
            <button
              name="complete"
              onClick={cateHandler}
              className={
                status === "complete" ? styles.btnActive : styles.cateBtn
              }
            >
              completed
            </button>
            <button
              name="uncomplete"
              onClick={cateHandler}
              className={
                status === "uncomplete" ? styles.btnActive : styles.cateBtn
              }
            >
              active
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TodoForm;
