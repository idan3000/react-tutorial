import React from "react";

const NavBar = ({ TotalCounters }) => (
  <nav className="navbar navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge bg-pill bg-secondary m-2">{TotalCounters}</span>
      </a>
    </div>
  </nav>
);

export default NavBar;
