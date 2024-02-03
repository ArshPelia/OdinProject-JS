import React from "react";
import { useCart } from "./Context/CartContext";
import '../styles/product.css';

const Product = ({ id, title, price, image }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    console.log("adding to cart")
    // Assuming your product data has an 'id' property
    addToCart({ id, title, price, image, quantity: 1 });
  };

  return (
    <article className='product__item'>
      <div className='product__item-image'>
        <img src={image} alt={title} />
      </div>

      <h3>{title}</h3>
      <h4>Price: {price}</h4>
      <label htmlFor="items">Amount: </label>
      <input type="num" id="items" />
      <button onClick={handleAddToCart}>Add to Cart</button>
    </article>
  );
};

export default Product;
