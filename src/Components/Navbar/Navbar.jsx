import { Link, useLocation } from "react-router-dom";
import React from "react";

const Navbar = () => {
    const location = useLocation();

const activeLinkStyle = {
        backgroundColor: '#8D99AE',
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg text-uppercase text-white" style={{ backgroundColor: '#48435C' }}>
                <div className="container-fluid p-4 mx-4">
                    <Link className="navbar-brand text-white fw-bold fs-2 ms-4" to="/">Start Framework</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse ms-4" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link text-white fw-bold" to="/about" style={location.pathname === '/about' ? activeLinkStyle : {}}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white fw-bold" to="/portfolio" style={location.pathname === '/portfolio' ? activeLinkStyle : {}}>Portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white fw-bold" to="/contact" style={location.pathname === '/contact' ? activeLinkStyle : {}}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
