import React from 'react';
import { NavLink } from 'react-router-dom';

const MainNavigation: React.FC = () => {

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark ps-4" aria-label="main">
        <a href="/" className="navbar-brand">
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
  );
}

export default MainNavigation;