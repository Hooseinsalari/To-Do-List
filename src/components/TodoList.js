import React from "react";

// component
import Todo from "./Todo";

// style
import styles from "./TodoList.module.css";



const TodoList = ({ todos, onEdit ,onDelete, onComplete, unCompleteTodos }) => {

  return (
    <div className={styles.container}>
      <div className={styles.todos}>
        {todos.map((todo) =>
        <Todo 
        key={todo.id}
        todo={todo}
        onEdit={onEdit}
        onDelete={onDelete}
        onComplete={onComplete}
        />
        )}
      </div>
      <div>
        {todos.length ? (
          <div className={styles.footer}>
            <p>{unCompleteTodos} items left</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TodoList;
