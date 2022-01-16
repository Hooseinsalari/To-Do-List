import React from 'react';

// styles
import styles from "./Todo.module.css";

// icons
import { FaTimes, FaCheck, FaRegEdit } from "react-icons/fa";

const Todo = ({todo, onDelete, onComplete, onEdit}) => {
    return (
        
          <div
            key={todo.id}
            className={todo.isComplete ? styles.todoComplete : styles.todo}
          >
            <div
              className={
                todo.isComplete ? styles.todoLeftComplete : styles.todoLeft
              }
            >
              <button
                className={styles.checkBtn}
                onClick={() => onComplete(todo.id)}
              >
                <FaCheck className={styles.checkIcon} />
              </button>
              <p onClick={() => onComplete(todo.id)}>{todo.text}</p>
            </div>
            <div className={styles.todoRight}>
              <button className={styles.editBtn} onClick={() => onEdit(todo.id)}>
                <FaRegEdit className={styles.editIcon} />
              </button>
              <button
                className={styles.deleteBtn}
                onClick={() => onDelete(todo.id)}
              >
                <FaTimes className={styles.deleteIcon} />
              </button>
            </div>
          </div>
        
        
    );
};

export default Todo;