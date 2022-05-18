import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          
          <h4>
            <Link to="/">
             Connect
            </Link>

          </h4>
        
      </div>
      <div className="navbar-links">
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
             <Link to="/signup">Signup</Link>
            </li>
          </ul>
        </div>
    
    </div>
  </div>
  )
}

export default Navbar