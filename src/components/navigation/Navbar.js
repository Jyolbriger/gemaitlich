import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a>Das sind wir</a>
        </li>
        <li>
          <a href="#konzept">Konzept</a>
        </li>
        <li>
          <a>Events & Termine</a>
        </li>
        <li>
          <a>Feedback & Kontakt</a>
        </li>
        <li>
          <div className="header-icons">
            <a>
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
