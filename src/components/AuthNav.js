import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./AuthNav.module.css";
const AuthNav = () => {
  return (
    <div>
      <NavLink
        to="/register"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        register
      </NavLink>
      <NavLink
        to="/login"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        login
      </NavLink>
    </div>
  );
};
export default AuthNav;
