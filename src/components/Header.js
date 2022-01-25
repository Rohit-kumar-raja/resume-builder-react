import React from 'react';
import { Link, to } from 'react-router-dom';
const Header = () => {
  const tongal = () => {

    document.querySelector('.offcanvas-collapse').classList.toggle('open')
    document.querySelector('.fa-bars').classList.toggle('fa-times')
  }

  return (
    
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-info" aria-label="Main navigation">
      <div className="container-fluid">
        <button className="navbar-toggler p-0 " onClick={tongal} type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
          <i id="bars" class="fas fa-bars"></i>
        </button>
        <Link className="navbar-brand" to="/"><img src="img/logo.png" width="40px" alt="logo" /> CV Builder</Link>

        <div className="navbar-collapse offcanvas-collapse justify-content-end mt-2" id="navbarsExampleDefault">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="template">Templates</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="pricing">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="about">About us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="contact">Contact us</Link>
            </li>
            <div className="d-flex ml-4">
              <Link to="#test-popup" className="btn login-btn btn-sm pl-2 pr-2  mr-3" type="submit"><i class="fas fa-user-plus"></i> Signup</Link>
              <Link to="#signup-popup" className="btn login-btn btn-sm pl-2 pr-2" type="submit"><i class="fas fa-sign-in-alt"></i> Login</Link>

            </div>
          </ul>

        </div>

      </div>
    </nav>

    
  );
}

export default Header;
