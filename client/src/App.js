import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CreateTodo from './components/CreateTodo';
import EditTodo from './components/EditTodo';
import TodoList from './components/TodoList';
import DeleteTodo from './components/DeleteTodo';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faEdit);

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <Link to='/create' className='navbar-brand'>
              <FontAwesomeIcon icon={['fas', 'edit']} />
            </Link>

            <Link to='/' className='navbar-brand'>
              Pet Manager's Event App
            </Link>
            <div className='collapase navbar-collapse'>
              <ul className='navbar-nav mr-auto'>
                <li className='navbar-item'>
                  <Link to='/' className='nav-link'>
                    Todos
                  </Link>
                </li>
                <li className='navbar-item'>
                  <Link to='/create' className='nav-link'>
                    Create Todo
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <br />

          <Route path='/' exact component={TodoList} />
          <Route path='/edit/:id' component={EditTodo} />
          <Route path='/create' component={CreateTodo} />
          <Route path='/delete/:id' component={DeleteTodo} />
        </div>
      </Router>
    );
  }
}
export default App;
