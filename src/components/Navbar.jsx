import React from 'react';
import avatar from '../img/E.jpg'
import {Link} from "react-router-dom"; 



const Navbar = ({user}) => {
  return (
    <div className='navbar'>
        <span className='logo'> 
          <Link className='link' to="/">
            Login App
          </Link>
        </span>

      {user ? (
        <ul className='list'>
          <li className='listItem'>
              <img 
              src={avatar} 
              alt='' 
              className='avatar'
              />
          </li>
          <li className='listItem'>Erik Hernandez</li>
          <li className='listItem'>logout</li>
        </ul>

        ):(<Link className='link' to="login">
        Login
        </Link>
        )}
    </div>
  )
}

export default Navbar