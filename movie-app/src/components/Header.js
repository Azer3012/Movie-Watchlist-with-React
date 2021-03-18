import React from "react";
import { Link } from "react-router-dom";
import "../fontawesome/css-fontawesome/all.css";
function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="inner-container">
          <div className="brand">
            <Link to="/">Kinolar</Link>
          </div>
          <ul className="header-menu">
            <li>
              <Link to="/">Mənim Listim</Link>
            </li>
            <li>
              <Link to="/watched">Baxdıqlarınız</Link>
            </li>
            <li>
              <Link to="/add">
                <i className="fas fa-plus"></i>
                Əlavə edin
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
