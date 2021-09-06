import React from 'react';
import { NavLink } from 'react-router-dom';

import { routes } from '@pages/routes';
import UserDetails from '@features/user/user.component';

const MainNavigation: React.FC = () => {

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark ps-4" aria-label="main">
        <a href={routes.home.url} className="navbar-brand">
          {routes.home.linkText}
        </a>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
              <NavLink to={routes.people.url} className="nav-link">
                {routes.people.linkText}
              </NavLink>
          </li>
          <li className="nav-item">
              <NavLink to={routes.cars.url} className="nav-link">
                {routes.cars.linkText}
              </NavLink>
          </li>
        </ul>
        <span className="d-flex navbar-text ms-auto p-2">
          <UserDetails />
        </span>
    </nav>
  );
}

export default MainNavigation;