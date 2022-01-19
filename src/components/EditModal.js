import React, {useRef, useState, useEffect} from "react";

// styles
import styles from "./EditModal.module.css";

// icons
import { FaTimes } from "react-icons/fa";

const EditModal = ({ showModal, setShowModal, addTodoHandler, edit }) => {

  const [todo, setTodo] = useState(edit ? edit.text : "");

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
                <button className={styles.closeBtn} onClick={() => setShowModal(false)}><FaTimes className={styles.closeIcon} /></button>
              </div>
              <form className={styles.main} onSubmit={submitHandler} className={styles.form} >
                  <input className={styles.formInput} type="text" value={todo} onChange={inputHandler}  />
                  <button className={styles.submitBtn} type="submit">update</button>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default EditModal;
