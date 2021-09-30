import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
   return (
      <div className="navbar">
         <NavLink to="/home" activeClassName="selected">
            Home
         </NavLink>
         <NavLink to="/meals" activeClassName="selected">
            Meals
         </NavLink>
         <NavLink to="/about" activeClassName="selected">
            About
         </NavLink>
      </div>
   );
};

export default Navbar;
