import React from "react";
import "./shoppingcart.css";

function ShoppingCart(props) {
  return (
    <div className="ShoppingCart">
      <div className="cartItem">
        <h3>{props.cart}</h3>
      </div>
      <div className="cartItem">
        <h3>Sample Two</h3>
        <h5>$ 20</h5>
      </div>
      <h2>Total: $ 120</h2>
    </div>
  );
}

export default ShoppingCart;
