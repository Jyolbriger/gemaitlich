import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/">Konzept</Link>
        </li>
        <li>
          <Link to="/">Das sind wir</Link>
        </li>
        <li>
          <Link to="/">Events & Termine</Link>
        </li>
        <li>
          <Link to="/">Feedback & Kontakt</Link>
        </li>
        <li>
          <div className="header-icons">
            <a href="https://www.facebook.com/Gemaitlich-107873887653154">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/gemaitlich/">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
