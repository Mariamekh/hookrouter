import React from 'react'
import {
    A
} from 'hookrouter' 

const Nav = () => {
    return ( 
    <div>
        <nav> 
            <ul className='nav-links'>
                <li> 
                    <A className='nav-link-item' href='/'>
                        HOME
                    </A>
                </li>
                <li> 
                    <A className='nav-link-item' href='/about'>
                        ABOUT
                    </A>
                </li>
                <li> 
                    <A className='nav-link-item' href='/shop'>
                        SHOP
                    </A>
                </li>
            </ul>
        </nav>
    </div>
    )
}

export default Nav
