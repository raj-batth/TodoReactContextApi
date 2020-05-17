import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons'

import { ToDoContext } from '../state/ToDoContext'

const TodoItem = (props) => {
    const { todos } = useContext(ToDoContext);
    const [todosS, setTodos] = todos;
    const getStyle = () => {
        return {
            textDecoration: props.completed ? 'line-through' : 'none',
            backgroundColor: '#f4f4f4',
            marginTop: '5px',
            borderBottem: '1px #cc dotted',
            fontSize: '16px',
        }
    }
    const delTodo = (id) => {
        setTodos(todosS => [...todosS.filter(todo => todo.id !== id)]);

    }
    const markComplete = (id) => {
        console.log(todosS.length);
        setTodos(todosS.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        })
        );
    }
    return (
        <>
            {todosS !== '' ? (

                <div style={getStyle()} >
                    <p style={{ display: 'flex' }}>
                        <span style={{ flex: '10', padding: '10px', textAlign: 'left' }}>{props.title}</span>
                        <button onClick={markComplete.bind(this, props.id)} style={btnCheckStyle}>
                            <FontAwesomeIcon icon={faCheck} />
                        </button>
                        <button onClick={delTodo.bind(this, props.id)} style={btnStyle}>
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </p>
                </div >) :
                <p>no No No </p>

            }
        </>
    );
}

const btnStyle = {
    background: '#ee7455',
    color: '#fff',
    border: 'none',
    padding: '10px 10px',
    cursor: 'pointer',

}
const btnCheckStyle = {
    background: '#79C27B',
    color: '#fff',
    border: 'none',
    padding: '10px 10px',
    cursor: 'pointer',
}




export default TodoItem
