import React from 'react';

function Header() {
  return (
    <header>
      <nav className="teal lighten-1">
        <div className="nav-wrapper container">
          <a href="#" className="brand-logo"></a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
