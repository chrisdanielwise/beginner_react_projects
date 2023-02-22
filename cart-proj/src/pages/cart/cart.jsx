import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCT } from "../CartData";
import CartItem from "./cart-item";
import "./cart.css"
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const {cartItems,getTotalCartAmount} = useContext(ShopContext)
  const totalAmount = getTotalCartAmount()
  const navigate = useNavigate()
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCT.map((value) => {
          return  (cartItems[value.id] !== 0) && 
          <CartItem product={value}/>
        })} 
      </div>
          { totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: ${totalAmount}</p>
          <button onClick={()=> navigate("/")}>Continue Shopping</button>
          <button>Checkout</button>
        </div>
        ) : (
        <h2>Your Cart is Empty</h2>
        )}
          
    </div>
  );
};


export default Cart;
