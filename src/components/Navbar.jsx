import React from 'react';
import avatar from '../img/E.jpg'

function Navbar() {
  return (
    <div className='navbar'>
        <span className='Logo'>Login App</span>
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
    </div>
  )
}

export default Navbar