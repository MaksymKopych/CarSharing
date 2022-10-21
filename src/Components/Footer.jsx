import React from "react";

export const Footer = () => {
  return (
    <footer className="footer">
      <a href="/" className="logo">
        <img alt="logo" src="images/icon-logo-normal.svg" />
        <span>Car</span>Sharing
      </a>
      <div className="footer__link">
        <a href="/">Home page</a>
        <a href="#about">About us</a>
        <a href="#galery">Gallery</a>
        <a href="/">Share regulation</a>
        <a href="/">Price</a>
        <a href="/">Our fleet</a>
        <a href="/">Our clients</a>
        <a href="/">Contact</a>
      </div>
      <div className="copirating">copyright © 2016.coderslab.</div>
    </footer>
  );
};
