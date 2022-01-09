import React, { useState } from 'react';

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
        setTodos([...todos, newTodo])
        setTodo("")
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" value={todo} onChange={inputHandler} />
                <button type='submit'>add</button>
            </form>
        </div>
    );
};

export default TodoForm;