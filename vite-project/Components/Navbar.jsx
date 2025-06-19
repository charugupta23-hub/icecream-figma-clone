import React from "react";
import "./Navbar.css";

function Navbar({page}) {
  return (
    <>
   
    <nav className="navbar" style={{ background: page.bgGradient }}>
      <div className="navbar__logo"><img src='../assets/logo.png'/></div>
      <ul className="navbar__links">
        <li id='home'>Home</li>
        <li id='shop'>Shop</li>
        <li id='delivery'>Delivery</li>
        <li id='contact'>Contact</li>
      </ul>
      <button className="navbar__cta">Order Your Ice Cream</button>
    </nav>
    </>
  );
}

export default Navbar;
