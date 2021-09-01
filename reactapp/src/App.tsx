import React from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import ReduxToastr from 'react-redux-toastr';
import { Provider } from 'react-redux';

import store from './state/redux-store';

import 'bootstrap/dist/css/bootstrap.min.css';

import { PersonList } from './features/person/components/List';

const App: React.FC = () => {

  return (
    <Provider store={store}>

      <Router>

        <nav className="navbar navbar-expand navbar-dark bg-dark ps-4" aria-label="main">
          <a href="/tutorials" className="navbar-brand">
            DotNetDemo
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to={"/tutorials"} className="nav-link">
                Tutorials
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/add"} className="nav-link">
                Add
              </NavLink>
            </li>
          </div>
        </nav>

        <div className="container mt-3">

          <div>Hello World</div>

          <PersonList />

        </div>

        <ReduxToastr 
          timeOut={3000} 
          preventDuplicates 
          position="top-left" 
          transitionIn="fadeIn" 
          transitionOut="fadeOut" 
          closeOnToastrClick progressBar />

      </Router>
      
    </Provider>
  );
}

export default App;