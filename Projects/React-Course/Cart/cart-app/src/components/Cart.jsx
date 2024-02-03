import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "./Context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div id="container">
      <h1>Cart Page</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.title} - ${item.price}
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}

      {/* <Link to="/">Click here to go back</Link> */}
    </div>
  );
};

export default Cart;
