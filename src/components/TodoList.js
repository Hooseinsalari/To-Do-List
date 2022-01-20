import React, { useState } from "react";
import EditModal from "./EditModal";

// component
import Todo from "./Todo";

// style
import styles from "./TodoList.module.css";

const TodoList = ({
  todos,
  onDelete,
  onComplete,
  unCompleteTodos,
  addTodoHandler,
  onUpdateTodo,
}) => {
  const [edit, setEdit] = useState({ id: null, text: "", isComplete: false });
  // for modal
  const [showModal, setShowModal] = useState(false);

  const editTodoHandler = (todo) => {
    setEdit(todo);
    setShowModal((prevState) => !prevState);
  };

  const submitTodo = (newValue) => {
    onUpdateTodo(edit.id, newValue);
    setEdit({ id: null, text: "" });
  };

  return (
    <div className={styles.container}>
      {todos.length ? (
        <div className={styles.todos}>
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              onEdit={() => editTodoHandler(todo)}
              onDelete={onDelete}
              onComplete={onComplete}
            />
          ))}
        </div>
      ) : (
        <div className={styles.emptyContainer}>
          <h2 className={styles.emptyAlert}>Add Some Todos</h2>
        </div>
      )}
      <div className={styles.footerContainer}>
        {todos.length ? (
          <div className={styles.footer}>
            <p className={styles.footerFirstChild}>{unCompleteTodos} items left</p>
            <p className={styles.footerLastChild}>Be strong and do your todos</p>
          </div>
        ) : null}
      </div>
      {edit.id ? (
        <EditModal
          addTodoHandler={submitTodo}
          setShowModal={setShowModal}
          showModal={showModal}
          edit={edit}
          setEdit={setEdit}
        />
      ) : null}
    </div>
  );
};

export default TodoList;
