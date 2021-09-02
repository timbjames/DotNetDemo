import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import ReduxToastr from 'react-redux-toastr';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';

import store from './state/redux-store';
import PageRoot from './pages/root.component';

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

          <PageRoot />

        </div>

      </Router>

      <ReduxToastr 
        timeOut={3000} 
        preventDuplicates 
        position="top-left" 
        transitionIn="fadeIn" 
        transitionOut="fadeOut" 
        closeOnToastrClick progressBar />

    </Provider>
  );
}

export default App;