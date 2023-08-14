import React from 'react';
import './navbar.module.css';
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src="/logo.png" alt="Logo" />
            </div>
            <div className="nav-links">
                <Link href="/">Home</Link>
                <Link href="/community">Community</Link>
                <Link href="/about">About</Link>
                <div className="login-button">
                    <Link href="/login">Login</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
