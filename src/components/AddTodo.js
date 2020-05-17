import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ToDoContext } from '../state/ToDoContext';
import { v4 as uuidv4 } from 'uuid';
const AddTodo = () => {
    const [title, setTitle] = useState('');
    const { todos } = useContext(ToDoContext);
    const [todosS, setTodos] = todos;

    const onChange = (e) => {
        setTitle(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        const id = uuidv4();
        setTodos(todosS => [...todosS, { id: id, title: title, completed: false }]);
        setTitle('');
    }
    return (
        <div className="toDoForm">
            <form onSubmit={onSubmit} style={formStyle}>
                <p style={{ backgroundColor: ' #fff', padding: '5px', width: '100%' }}>
                    <input
                        className="toDoInputBox"
                        type="text"
                        name="title"
                        placeholder="Add Todo .."
                        value={title}
                        onChange={onChange}
                        required
                    >
                    </input>
                    <button
                        type="submit" style={btnStyle}>
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </p>
            </form>
        </div>
    );
}




const formStyle = {
    display: 'flex'
}

const btnStyle = {
    background: '#ee7455',
    color: '#fff',
    border: 'none',
    padding: '5px 5px',
    margin: '5px',
    cursor: 'pointer',
    float: 'right'

}
export default AddTodo
