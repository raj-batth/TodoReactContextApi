import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Todos from './components/Todos'
import Header from './layout/Header'
import AddTodo from './components/AddTodo'
import SearchTodo from './components/SearchTodo'
import About from './components/About'
import { ToDoProvider } from './state/ToDoContext';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <ToDoProvider>
          <Route exact path="/" render={props => (
            <React.Fragment>
              <div className="toDoAddSearchDiv">
                <AddTodo />
                <SearchTodo ></SearchTodo>
              </div>
              <div className="toDoList">
                <Todos />
              </div>
            </React.Fragment>
          )} />
        </ToDoProvider>
        <Route exact path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;
