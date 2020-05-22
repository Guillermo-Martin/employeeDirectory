import React from 'react';
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div className="navbar navbar-light bg-light fixed-top">

      <ul className="nav nav-tabs">
        <li className="nav-item nav-link"><Link to="/">Employee Directory</Link></li>
      </ul>

    </div>
  );
    
}

export default Navbar;