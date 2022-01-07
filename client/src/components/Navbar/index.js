import React from "react";
import { Link } from "react-router-dom";
import {Link as LinkScroll} from "react-scroll";
import { FaBars } from "react-icons/fa"

import classes from "./Navbar.module.css";

const Navbar = ({toggle}) => {
  return (
    <>
      <div className={classes.nav}>
        <div className={classes.navbarContainer}>
          <Link to="/" className={classes.navLogo}>
            Logo
          </Link>
          <div className={classes.mobileIcon} onClick={toggle}>
            <FaBars />
          </div>
          <ul className={classes.navMenu}>
            <li className={classes.navItem}>
              <LinkScroll to="about" className={classes.navLinks}>About</LinkScroll>
            </li>
            <li className={classes.navItem}>
              <LinkScroll to="discover" className={classes.navLinks}>Discover</LinkScroll>
            </li>
            <li className={classes.navItem}>
              <LinkScroll to="services" className={classes.navLinks}>Services</LinkScroll>
            </li>
            <li className={classes.navItem}>
              <LinkScroll to="signup" className={classes.navLinks}>Sign Up</LinkScroll>
            </li>
          </ul>
          <nav className={classes.navBtn}>
          <Link to="signin" className={classes.navBtnLink}>Sign In</Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
