import React from 'react';
import './style.css';

const NavBar = () => {
  return (
    <nav className="navbar nav-background">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#" style={{ color: 'white' }}>
            DND
          </a>
        </div>
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a href="#" style={{ color: 'white' }}>
              <span className="glyphicon glyphicon-user" /> Welcome
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
