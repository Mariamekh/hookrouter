import React from 'react'
import {
  Link
} from 'react-router-dom'

function NavReactRouter() {
  return (  
    <div>
      <nav>
        <ul className='nav-links'>
          <li>
            <Link className='nav-link-item' to='/'>
              HOME
            </Link>
          </li>
          <li>
            <Link className='nav-link-item' to='/about'>
              ABOUT
            </Link>
          </li>
          <li>
            <Link className='nav-link-item' to='/shop'>
              SHOP
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavReactRouter
