import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="all-center">
      <h2 className="lead">Melde dich bei uns</h2>
      <p>
        Um Kontakt zu uns aufzunehmen, melde dich am besten über unsere Social
        Media Kanäle oder schreibe uns eine Mail an
        <strong> gemaitlich@gmx.de</strong>
      </p>
      <p>Wir freuen uns über Feedback, Anregungen & Anfragen!</p>
      <div className="footer-icons">
        <a href="https://www.facebook.com/Gemaitlich-107873887653154">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com/gemaitlich/">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default Contact;
