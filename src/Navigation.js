import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'

function Navigation() {

  const navStyle = {
      color: 'white',
      textDecoration: 'none'
  };

  return (
    <nav>
     <h3>React Router Project</h3>
     <ul className="navigation-links">
     <Link style={navStyle} to='/'>
       <li>Home</li>
       </Link>
       <Link style={navStyle} to='/about'>
       <li>About</li>
       </Link>
       <Link style={navStyle} to='/shop'>
       <li>Shop</li>
       </Link>
     </ul>
    </nav>
  );
}

export default Navigation;