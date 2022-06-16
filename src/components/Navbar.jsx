import React from 'react';


function Navbar() {
  return (
    <div className='navbar'>
        <span className='Logo'>Login App</span>
        <ul className='list'>
            <li className='listItem'>
                <img 
                src='../img/E.jpg' 
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