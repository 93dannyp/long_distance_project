import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {


    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target="#navbarSupportedContent"aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className='navbar-nav mr-auto'>
                    <div className='navbar-nav active'>
                        <Link className='nav-link' to='/'>HOME</Link>
                    </div>
                    <div className='navbar-nav active'>
                        <Link className='nav-link' to='/calendar'>Training Calendar</Link>
                    </div>
                    <div>
                        <Link className='nav-link' to='/recordworkout'>RECORD</Link>
                    </div>
                    <div className='navbar-nav active'>
                        <Link className='nav-link' to='/signup'>SIGN UP</Link>
                    </div>
                    <div className='navbar-nav active'>
                        <Link className='nav-link' to='login'>LOGIN</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}