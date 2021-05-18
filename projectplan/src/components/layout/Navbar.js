import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutlinks from './SignedOutLinks'

const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">ProjectPlan</Link>
                <SignedInLinks />
                <SignedOutlinks />
            </div>
        </nav>
    )
}

export default Navbar
