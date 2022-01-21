import React, {useState} from "react";

// styles
import styles from "./EditModal.module.css";

// icons
import { FaTimes } from "react-icons/fa";

// toast
import { notify } from "./Toastify";

const EditModal = ({ showModal, setShowModal, addTodoHandler, edit, setEdit }) => {

  const [todo, setTodo] = useState(edit ? edit.text : "");

  const inputHandler = (event) => {
    setTodo(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault()
    if (!todo) {
      return;
    }
    addTodoHandler(todo);
    notify("success", "successfully updated")
    setTodo("");
    setShowModal(false)
  };

  const closeModalHandler = () => {
    setShowModal(false)
    setEdit({ id: null, text: "" });
  }

  return (
    <>
      {showModal ? (
        <div className={styles.container}>
          <div className={styles.modal}>
            <div className={styles.mainModal}>
              <div className={styles.title}>
                <h3>Edit Todo</h3>
                <button className={styles.closeBtn} onClick={closeModalHandler}><FaTimes className={styles.closeIcon} /></button>
              </div>
              <form onSubmit={submitHandler} className={styles.form} >
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
