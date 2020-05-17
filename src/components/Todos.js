import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import { ToDoContext } from '../state/ToDoContext';

const Todos = () => {
  const { todos, searchQuery } = useContext(ToDoContext);
  const [todosS] = todos;
  const [searchParam] = searchQuery;

  return (
    <>
      {todosS.map((todo, i) => {
        if (searchParam === 'completed' && todo.completed === true) {
          return <TodoItem key={i} id={todo.id} title={todo.title} completed={todo.completed} />
        }
        else if (searchParam === 'notCompleted' && todo.completed === false) {
          return <TodoItem key={i} id={todo.id} title={todo.title} completed={todo.completed} />
        }
        else if (searchParam === 'all') {
          return <TodoItem key={i} id={todo.id} title={todo.title} completed={todo.completed} />
        }
      })}
    </>
  );

}

export default Todos;
