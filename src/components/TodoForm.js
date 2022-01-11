import React, { useState } from 'react';

// style
import styles from "./TodoForm.module.css"

const TodoForm = ({setTodos, todos}) => {
    const [todo, setTodo] = useState("")

    const inputHandler = (event) => {
        setTodo(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const newTodo = {
            title: todo,
            id: Math.floor(Math.random() * 1000),
            isComplete: false
        }

        if(todo) {
            setTodos([...todos, newTodo])
        } else {
            alert("enter gozo")
        }

        setTodo("")
    }

    return (
            <form onSubmit={submitHandler} className={styles.container}>
                <button type='submit' className={styles.addBtn}>add</button>
                <input placeholder='add todo ...' type="text" value={todo} onChange={inputHandler} className={styles.input} />
            </form>
    );
};

export default TodoForm;