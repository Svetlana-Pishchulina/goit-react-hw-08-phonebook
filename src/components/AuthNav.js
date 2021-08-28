import React from "react";
import { NavLink } from "react-router-dom";
const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register">register</NavLink>
      <NavLink to="/login">login</NavLink>
    </div>
  );
};
export default AuthNav;
