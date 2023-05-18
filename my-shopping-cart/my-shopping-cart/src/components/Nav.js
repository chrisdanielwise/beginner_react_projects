import React,{useContext} from "react";
import {Link} from "react-router-dom";
import { AppContext } from "../context/AppContext";
const Nav = () => {

  const {cartData} = useContext(AppContext)
  return (
    <nav>
        <Link to="/">Shop</Link>
        <div className="itemNumber">{cartData.length}</div>
        <Link to="/cart">Cart</Link>
    </nav>
  );
};

export default Nav;
