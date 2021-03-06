import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="#konzept">Konzept</a>
        </li>
        <li>
          <a href="#about">Das sind wir</a>
        </li>
        <li>
          <a href="#events">Events & Termine</a>
        </li>
        <li>
          <a href="#contact">Feedback & Kontakt</a>
        </li>
        <li>
          <Link to="/impressum">Impressum</Link>
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
