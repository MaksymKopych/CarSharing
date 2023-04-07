import React, { useEffect, useState } from "react";

export const Header = ({ windowWidth, showMenu, setShowMenu }) => {
  const [darkTheme, setDarkTheme] = useState(undefined);

  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        // Set value of  darkmode to dark
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");
      } else {
        // Set value of  darkmode to light
        document.documentElement.removeAttribute("data-theme");
        window.localStorage.setItem("theme", "light");
      }
    }
  }, [darkTheme]);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );
    // Set initial darkmode to light
    setDarkTheme(initialColorValue === "dark");
  }, []);

  const handleToggle = (event) => {
    setDarkTheme(event.target.checked);
  };

  return (
    <header className="header" id="header">
      <div className="menu menu__sticky">
        <a href="/CarSharing" className="logo">
          <img alt="logo" src="images/icon-logo-normal.svg" />
          <span>Car</span>Sharing
        </a>
        {windowWidth > 992 ? (
          <nav className={`nav`}>
            <div
              className="burger"
              onClick={() => {
                setShowMenu((prev) => (prev ? false : true));
              }}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="nav__list">
              <a href="#header">Home</a>
              <a href="#blog">Blog</a>
              <a href="#service">Service</a>
              <a href="#contact">Contact</a>
            </div>
          </nav>
        ) : (
          <nav className={`nav ${showMenu ? "active" : null}`}>
            <div
              className="burger"
              onClick={() => {
                setShowMenu((prev) => (prev ? false : true));
              }}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="nav__list">
              <a
                onClick={() => {
                  setShowMenu(false);
                }}
                href="#header"
              >
                Home
              </a>
              <a
                onClick={() => {
                  setShowMenu(false);
                }}
                href="#blog"
              >
                Blog
              </a>
              <a
                onClick={() => {
                  setShowMenu(false);
                }}
                href="#service"
              >
                Service
              </a>
              <a
                onClick={() => {
                  setShowMenu(false);
                }}
                href="#contact"
              >
                Contact
              </a>
            </div>
          </nav>
        )}
      </div>
      <div className="hero">
        <h1 className="hero__text">Car Sharing</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo repellat
          totam a tempore at sequi minima culpa error aliquam magnam tempora,
          amet iusto, rerum tenetur!
        </p>
        <div className="hero__btns">
          <a href="#" className="hero__button">
            Share a car
          </a>
          <a href="#" className="hero__button">
            Key Features
          </a>
        </div>
      </div>
      <a href="#blog" className="arrow">
        <img alt="arrow" src="images/icon-arrow-down.svg" />
      </a>
    </header>
  );
};
