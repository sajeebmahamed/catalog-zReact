import { Link } from '@reach/router';
import React from 'react';

const NavBar = () => (
    <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <Link to="/" className="navbar-brand">
                <i className="fas fa-film mr-2" />
                Catalog-Z
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <i className="fas fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to="/" className="nav-link nav-link-1 active" aria-current="page">
                            Photos
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/videos" className="nav-link nav-link-2">
                            Videos
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link nav-link-3">
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link nav-link-4">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default NavBar;
