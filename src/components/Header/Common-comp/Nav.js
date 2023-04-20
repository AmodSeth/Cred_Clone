import React, { useState } from "react";
import "./Nav.css";
const Nav = () => {
  const [mobileMenu,setmobileMenu] =  useState(false);
  
  const toggle = () => {
    setmobileMenu(!mobileMenu);
  };

 
  return (
    <div className="mobile-menu-wrapper">
      <div className={`mobile-menu only-mobile ${mobileMenu?"overlay":""}`}>
        <div className="mobile-nav-bar">
        <div className="nav-mobile-item">credit score check</div>
          <div className="nav-mobile-item">CRED X IPL</div>
      </div>
      </div>
      <div className="flex max-width nav">
        <img
          src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png"
          alt="logo"
          className="nav-logo"
        />
        <div className="only-mobile mobile-menu-wrapper">
          <button class={`hamburger hamburger--spin${
            mobileMenu ? "is-active": ""
        }`} type="button" onClick={toggle}>
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
          </button>
          </div>
        <div className="flex non-mobile">
          <div className="nav-item">credit score check</div>
          <div className="nav-item">CRED X IPL</div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
