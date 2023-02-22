import React from "react";
import { NavLink } from "react-router-dom";
const Nav = () =>{
    return (
        <>
          <nav className="main-nav">
            <ul>
                <li><NavLink exact activeClassName="active_Styles" to="/">Home</NavLink></li>
                <li><NavLink exact activeClassName="active_Styles" to="/about">About</NavLink></li>
                <li><NavLink exact activeClassName="active_Styles" to="/contact">Contact</NavLink></li>
                <li><NavLink exact activeClassName="active_Styles" to="/services">Services</NavLink></li>
            </ul>

          </nav>
        </>
    )
}

export default Nav;
