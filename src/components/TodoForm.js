import React, { useState } from "react";

// style
import styles from "./TodoForm.module.css";

// svg
import add from "../svg/add.svg";

const TodoForm = ({ setTodos, todos, filterTodos, setStatus, status }) => {
  const [todo, setTodo] = useState("");

  const inputHandler = (event) => {
    setTodo(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const newTodo = {
      title: todo,
      id: Math.floor(Math.random() * 1000),
      isComplete: false,
    };

    if (todo) {
      setTodos([...todos, newTodo]);
    } else {
      alert("enter gozo");
    }

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
            <img src={add} />
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
