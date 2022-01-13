import React from "react";

// style
import styles from "./TodoList.module.css";

// icons
import { FaTimes, FaCheck, FaRegEdit } from "react-icons/fa";

const TodoList = ({ todos, setTodos, filterTodos ,setStatus, filteredTodos }) => {

 

  const deleteHandler = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  // -------

  const completeHandler = (id) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex((todo) => todo.id === id);
    let selectedTodo = newTodos[index];
    selectedTodo.isComplete = !selectedTodo.isComplete;
    setTodos(newTodos);
  };

  // -------

  const cateHandler = (event) => {
    // console.log(event.target.name)
    setStatus(event.target.name)
    filterTodos(event.target.name)
  }

  // if(todos.length) {
  //   return (
  //     <div className={styles.container}>
  //       {/* <div className={styles.todos}>
  //         sa
  //       </div> */}
  //       <div className={styles.footer}>
  //         <button name="all" onClick={cateHandler}>all</button>
  //         <button name="complete" onClick={cateHandler}>complete</button>
  //         <button name="uncomplete" onClick={cateHandler}>uncomplete</button>
  //       </div>
  //     </div>
  //   )
  // }

  const renderBtn = () => {
    return (
      <div className={styles.footer}>
        <button name="all" onClick={cateHandler}>all</button>
        <button name="complete" onClick={cateHandler}>complete</button>
        <button name="uncomplete" onClick={cateHandler}>uncomplete</button>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.todos}>
        {
          todos.map((todo) => (
            <div key={todo.id} className={todo.isComplete ? styles.todoComplete :styles.todo}>
              <div className={todo.isComplete ? styles.todoLeftComplete : styles.todoLeft}>
                <button
                  className={styles.checkBtn}
                  onClick={() => completeHandler(todo.id)}
                >
                  <FaCheck className={styles.checkIcon} />
                </button>
                <p onClick={() => completeHandler(todo.id)}>{todo.title}</p>
              </div>
              <div className={styles.todoRight}>
                <button className={styles.editBtn}><FaRegEdit className={styles.editIcon} /></button>
                <button
                  className={styles.deleteBtn}
                  onClick={() => deleteHandler(todo.id)}
                >
                  <FaTimes className={styles.deleteIcon} />
                </button>
              </div>
            </div>
          )) 
        }
      </div>
      <div>
      {
          todos.length ?
          <div className={styles.footer}>
            <p>{todos.filter((todo) => !todo.isComplete).length} items left</p>
          </div> 
          : null
      }
      </div>
    </div>
  );
};

export default TodoList;
