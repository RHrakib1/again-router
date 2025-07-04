import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <nav className='flex gap-5 '>
                <Link to='/banner'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact Us</Link>
                <Link to='/user'>User</Link>
                <Link to='/posts'>Post</Link>
            </nav>
        </div>
    )
}
