// src/pages/CartConfirmation.js

import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const CartConfirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { totalPrice } = location.state || { totalPrice: 0 };

  const handleContinueShopping = () => {
    navigate("/");
  };

  const handleGoToCart = () => {
    navigate("/cart");
  };

  return (
    <div className="ui container" style={{ marginTop: "3rem" }}>
      <div className="ui segment">
        <h2 className="ui header">✅ Product Added to Cart</h2>
        <p>Your item has been added to the cart successfully.</p>
        <p>
          <strong>Total Price:</strong> ${totalPrice}
        </p>
        <div className="ui buttons">
          <button onClick={handleContinueShopping} className="ui green button">
            Continue Shopping
          </button>
          <div className="or"></div>
          <button onClick={handleGoToCart} className="ui blue button">
            Go to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartConfirmation;
