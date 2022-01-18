import React, {useRef, useState, useEffect} from "react";

// styles
import styles from "./EditModal.module.css";

const EditModal = ({ showModal, setShowModal, addTodoHandler }) => {

  const [todo, setTodo] = useState("");

  const inputHandler = (event) => {
    setTodo(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault()
    if (!todo) {
      alert("enter todos!");
      return;
    }
    addTodoHandler(todo);
    setTodo("");
  };

  return (
    <>
      {showModal ? (
        <div className={styles.container}>
          <div className={styles.modal}>
            <div className={styles.mainModal}>
              <div className={styles.title}>
                <h3>Edit Todo</h3>
                <button onClick={() => setShowModal(false)}>close</button>
              </div>
              <form className={styles.main} onSubmit={submitHandler} >
                  <input type="text" value={todo} onChange={inputHandler}  />
                  <button type="submit">update</button>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default EditModal;
