import { useState } from "react";
import "./header.css";

function Header() {
  const [navbar, setNavBar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <header className="content-header">
      <div className={navbar ? "space active" : "space"}>
        <div className="header-logo">
          <a href="#">Serenity.</a>
        </div>
        <div className="menu-navs">
          <ul className="menu-ul">
            <li>
              <a href="#features">Featurs</a>
            </li>
            <li>
              <a href="#TeamMembers">Team</a>
            </li>
            <li>
              <a href="#services">services</a>
            </li>
            <li>
              <a href="#news">News</a>
            </li>
            <li>
              <a href="#get">Get In Touch</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="main-text">
        <h1>LAUNCH. YOUR. WEBSITE.</h1>
        <h2>Simple & Elegant One-Page WordPress Theme</h2>

        <p>
          An elegant, easy-to-use, one-page WordPress theme for professionals
          and businesses. Perfect to promote your projects, products or
          services.
        </p>
        <div className="buttons">
          <button className="button simple-b">Learn More</button>
          <button className="button blue-b">Download Now</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
