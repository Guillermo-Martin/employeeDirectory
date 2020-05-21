import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>

      <ul className="nav nav-tabs">
        <li className="nav-item nav-link"><Link to="/">See Employees</Link></li>
      </ul>

    </div>
  );
    
}

export default Navbar;