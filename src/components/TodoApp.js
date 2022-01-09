import React, { useState } from 'react';

// components
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoApp = () => {
    const [todos, setTodos] = useState([])


    return (
        <div>
            <h1>To do app</h1>
            <TodoForm todos={todos} setTodos={setTodos} />
            <TodoList todos={todos} setTodos={setTodos} />
        </div>
    );
};

export default TodoApp;