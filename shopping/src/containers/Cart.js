import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cart); // ✅ Corrected access
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const handleGoHome = () => {
    navigate("/");
  };

  if (cartItems.length === 0) {
    return (
      <div className="ui container">
        <h2>Your Cart is Empty</h2>
        <button onClick={handleGoHome} className="ui button primary">
          Go to Home
        </button>
      </div>
    );
  }

  return (
    <div className="ui container">
      <h2 className="ui dividing header">Your Cart</h2>
      <div className="ui items">
        {cartItems.map((item, index) => (
          <div className="item" key={index}>
            <div className="image">
              <img src={item.image} alt={item.title} style={{ width: 100 }} />
            </div>
            <div className="content">
              <div className="header">{item.title}</div>
              <div className="meta">
                <span className="price">${item.price}</span>
              </div>
              <div className="description">
                <p>{item.description.slice(0, 100)}...</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="ui segment">
        <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
        <button onClick={handleGoHome} className="ui button primary">
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default Cart;
