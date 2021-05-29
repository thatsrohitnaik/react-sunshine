import React from 'react';
import './style.css';

const NavBar = () => {
  return (
    <nav className="navbar navBackground">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#" style={{ color: 'white' }}>
            DND
          </a>
        </div>
        <ul class="nav navbar-nav navbar-right">
          <li>
            <a href="#" style={{ color: 'white' }}>
              <span class="glyphicon glyphicon-user" /> Welcome
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
