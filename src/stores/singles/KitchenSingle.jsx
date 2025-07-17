import React from "react";
import { kitchenData } from "../data/kitchen";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import '../styles/Kitchen.css';

import { useCart } from "../context/CartContext";

const KitchenSingle = () => {
  const { id } = useParams();

  const {addToCart, cartItems} = useCart()

  const product = kitchenData.find((item) => item.id === id);

  return (
    <>
      <Navbar />
      <div className="kitchen-ind-section">
        <div className="kitchen-ind-image">
          <img src={product.image} alt="" />
        </div>
        <div className="kitchen-ind-details space">
          <div className="kitchen-ind-company">
            <h2>{product.company}</h2>
          </div>
          <div className="kitchen-ind-model space">
            <h3>{product.model}</h3>
          </div>
          <div className="kitchen-ind-price space">
            <h2>{product.price}</h2>
          </div>
          <div className="kitchen-ind-desc space">
            <p>{product.description}</p>
          </div>
          <button onClick={()=>addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default KitchenSingle;
