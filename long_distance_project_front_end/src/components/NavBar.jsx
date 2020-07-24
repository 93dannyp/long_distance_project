import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div className='navBar'>
            <div>
                <Link to='/'>HOME</Link>
            </div>
            <div>
                <Link to='/calendar'>Training Calendar</Link>
            </div>
            <div>
                <Link to='/about'>ABOUT</Link>
            </div>
            <div>
                <Link to='/signup'>SIGN UP</Link>
            </div>
        </div>
    )
}