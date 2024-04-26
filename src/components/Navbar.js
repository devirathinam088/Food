import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Food
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav ml-auto">
              <a className="nav-link" href="/login">
                Login 
              </a>
              <a className="nav-link" href="/cart">
                Cart
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
