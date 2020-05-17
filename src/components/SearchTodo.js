import React, { useContext } from 'react';

import { ToDoContext } from '../state/ToDoContext';

const SearchTodo = () => {

    const { searchQuery } = useContext(ToDoContext);
    const [searchParam, setSearchParam] = searchQuery;


    const change = (e) => {
        setSearchParam(e.target.value);
    }
    return (
        <div className="select">
            <select id="todos" className="filter-todo" onChange={change}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="notCompleted">Not-Completed</option>
            </select>

        </div>
    );
}




export default SearchTodo
