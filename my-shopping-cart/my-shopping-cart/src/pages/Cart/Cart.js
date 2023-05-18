import React, { useContext } from "react";
import "../Cart/cart.css";
import {useNavigate} from "react-router-dom"
import CartItems from "./CartItems";
import { AppContext } from "../../context/AppContext";
// import { PRODUCT } from "../../CartData";
const Cart = () => {
  const { cartData,getTotalCartAmount } = useContext(AppContext);

  const getAmount = getTotalCartAmount()
  
  let nav = useNavigate()
  
  return (
    <div>
      <h1 className="shopping-title">My Cart Items</h1>
      {cartData.length === 0 ? (
        <h1>You have not added any item</h1>
      ) : (
        <div className="cart-container">
          {cartData &&
            cartData.map((value, index) => {
              return <CartItems value={value} index={index} />;
            })}
            <p>Subtotal ${getAmount}</p>
            <div className="btn-container">
              <button type="button" onClick={()=> nav("/")}>Continue Shopping</button>
              <button type="button" >Checkout</button>
            </div>
        </div>
      )}

    </div>
  );
};

export default Cart;
