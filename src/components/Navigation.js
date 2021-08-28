import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/" exact>
        Main
      </NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
    </nav>
  );
};
export default Navigation;
