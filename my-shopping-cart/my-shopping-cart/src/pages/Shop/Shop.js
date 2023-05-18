import React from "react";
import "../Shop/shop.css";
import ShopItems from "./ShopItems";
import { PRODUCT } from "../../CartData";

const shop = () => {
  
  return (
    <div>
      <h1 className="shopping-title">My Shopping Items</h1>
      <section className="shopping-section">
        <div className="shopping-cartegories">
          <h1>1</h1>
          <h1>2</h1>
          <h1>3</h1>
          <h1>4</h1>
          <h1>5</h1>
          <h1>6</h1>
        </div>
      <div className="shopping-container">
         {PRODUCT && PRODUCT.map((value,index)=> <ShopItems value={value} key={index}/>)}
      </div>
      </section>
    </div>
  );
};

export default shop;
