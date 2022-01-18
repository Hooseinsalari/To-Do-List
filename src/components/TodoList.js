import React, { useState } from "react";
import EditModal from "./EditModal";

// component
import Todo from "./Todo";
import TodoForm from "./TodoForm";

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
      <div className={styles.todos}>
        {todos.length ?
        todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onEdit={() => editTodoHandler(todo)}
            onDelete={onDelete}
            onComplete={onComplete}
          />
        )) : <h2 className={{"padding":"10px"}}>Empty</h2>  
      }
      </div>
      <div>
        {todos.length ? (
          <div className={styles.footer}>
            <p>{unCompleteTodos} items left</p>
          </div>
        ) : null}
      </div>
      {
        edit.id ? 
        <EditModal
        addTodoHandler={submitTodo}
        setShowModal={setShowModal}
        showModal={showModal}
        edit={edit}
        setEdit={setEdit}
      />: null
      }
    </div>
  );
};

export default TodoList;
