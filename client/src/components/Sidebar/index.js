import classes from "./Sidebar.module.css";
import { FaTimes } from "react-icons/fa";
import { Link as LinkScroll } from "react-scroll";
import { Link } from "react-router-dom";
import React from "react";

const Sidebar = ({isOpen, toggle}) => {
  return (
    <aside className={`${classes.sidebarContainer} ${isOpen && classes.isOpen}`} onClick={toggle}>
      <div className={classes.icon} onClick={toggle}>
        <FaTimes className={classes.closeIcon} />
      </div>
      <div className={classes.sidebarWrapper}>
        <ul className={classes.sidebarMenu}>
          <LinkScroll className={classes.sidebarLink} to="about" onClick={toggle}>
            About
          </LinkScroll>
          <LinkScroll className={classes.sidebarLink} to="discover" onClick={toggle}>
            Discover
          </LinkScroll>
          <LinkScroll className={classes.sidebarLink} to="services" onClick={toggle}>
            Services
          </LinkScroll>
          <LinkScroll className={classes.sidebarLink} to="signup" onClick={toggle}>
            Sign Up
          </LinkScroll>
        </ul>
        <div className={classes.sideBtnWrap}>
            <Link className={classes.sidebarRoute} to="/signin">Sign In</Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
