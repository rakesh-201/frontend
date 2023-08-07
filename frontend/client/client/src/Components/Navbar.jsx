import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg --bs-info-bg-subtle navbarCol ">
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="/">
          Swift Bond Invest
        </a>
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
              <a
                className="nav-link active text-light"
                aria-current="page"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="/">
                About
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-light"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu navbarCol">
                <li>
                  <a className="dropdown-item text-light" href="/">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-light" href="/">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item text-light" href="/">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <button className="btn btn-warning mx-2" type="submit">
              Login
            </button>
            <button className="btn btn-warning mx-2" type="submit">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
