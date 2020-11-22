import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/js/src/collapse.js';

function Navbar() {
  return (
    <div className='container-fluid'>
      <nav className='navbar  navbar-expand-lg navbar-light'>
        <Link className='navbar-brand' to='/'>
          Doctor's Portal
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='collapse navbar-collapse bg-white'
          id='navbarNavAltMarkup'>
          <div className='navbar-nav ml-auto'>
            <Link className='nav-item nav-link px-3' to='/'>
              Home
            </Link>
            <Link className='nav-item nav-link px-3' to='/'>
              About
            </Link>
            <Link className='nav-item nav-link px-3' to='/'>
              Dental Services
            </Link>
            <Link className='nav-item nav-link px-3' to='/'>
              Reviews
            </Link>
            <Link className='nav-item nav-link px-3' to='/'>
              Blogs
            </Link>
            <Link className='nav-item nav-link px-3' to='/'>
              Contact us
            </Link>
            <Link className='nav-item nav-link px-3' to='/dashboard/overview'>
              Admin
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
