import classes from "./Sidebar.module.css";
import { FaTimes } from "react-icons/fa";
import { Link as LinkScroll } from "react-scroll";
import { Link } from "react-router-dom";
import React from "react";

const Sidebar = ({isOpen, toggle}) => {
  return (
    <aside className={`${classes.sidebarContainer} ${isOpen && classes.isOpen}`}>
      <div className={classes.icon} onClick={toggle}>
        <FaTimes className={classes.closeIcon} />
      </div>
      <div className={classes.sidebarWrapper}>
        <ul className={classes.sidebarMenu}>
          <LinkScroll className={classes.sidebarLink} to="about">
            About
          </LinkScroll>
          <LinkScroll className={classes.sidebarLink} to="discover">
            Discover
          </LinkScroll>
          <LinkScroll className={classes.sidebarLink} to="services">
            Services
          </LinkScroll>
          <LinkScroll className={classes.sidebarLink} to="signup">
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
