import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="#about">Das sind wir</a>
        </li>
        <li>
          <a href="#konzept">Konzept</a>
        </li>
        <li>
          <a href="#konzept">Events & Termine</a>
        </li>
        <li>
          <a href="#konzept">Feedback & Kontakt</a>
        </li>
        <li>
          <div className="header-icons">
            <a href="https://www.instagram.com/gemaitlich/">
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
