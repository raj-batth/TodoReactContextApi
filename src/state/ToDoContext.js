import React, { useState, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid'
export const ToDoContext = createContext();

export const ToDoProvider = (props) => {
    const [todos, setTodos] = useState([
        {
            id: uuidv4(),
            title: "working on somenthing",
            completed: false
        },
        {
            id: uuidv4(),
            title: "working on somenthing2",
            completed: true
        }
    ]);

    const [searchQuery, setSearchQuery] = useState('all')
    return (
        <ToDoContext.Provider value={{ todos: [todos, setTodos], searchQuery: [searchQuery, setSearchQuery] }}>
            {props.children}
        </ToDoContext.Provider>
    )
}