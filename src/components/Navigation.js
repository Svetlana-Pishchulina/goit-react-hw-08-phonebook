import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import styles from "./Navigation.module.css";
import authSelectors from "../redux/auth/auth-selectors";

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink
        to="/"
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Main
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
export default Navigation;
