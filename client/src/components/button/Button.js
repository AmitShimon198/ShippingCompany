import React from 'react'
import styles from "./Button.module.css";
import { Link as LinkScroll } from "react-scroll";

const Button = ({primary, big, bigFont, children, onHover, dark}) => {

    return (     
        <LinkScroll
          className={`${styles.button} ${primary && styles.primary} ${big && styles.big} ${bigFont && styles.fontBig} ${dark && styles.dark}`}
          to="signup"
          onMouseEnter={onHover}
          onMouseLeave={onHover}
        >
          {children}
        </LinkScroll>
    )
}

export default Button
