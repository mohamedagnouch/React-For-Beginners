import React from "react";


export default function Header() {
  
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="...">
         Start Bootstrap
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="...">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="...">
               About
              </a>
            </li>
            <li className="nav-item dropdown"></li>
            <li className="nav-item">
              <a className="nav-link disabled" href="...">Shope
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
