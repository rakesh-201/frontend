import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg --bs-info-bg-subtle navbarCol ">
      <div className="container-fluid">
        <Link className="navbar-brand text-light" to="/dashboard">
          Swift Bond Invest
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active text-light"
                aria-current="page"
                to="/dashboard"
              >
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/bond">
                Bond Details
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/profile">
                Profile
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <Link className="btn btn-danger mx-2" to="/">
              Logout
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}
