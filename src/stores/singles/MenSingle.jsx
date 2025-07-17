import React from "react";
import { menData } from "../data/men";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import '../styles/Men.css';


import { useCart } from "../context/CartContext";

const MenSingle = () => {
  const { id } = useParams();

  const {addToCart, cartItems} = useCart()

  const product = menData.find((item) => item.id === id);

  return (
    <>
      <Navbar />
      <div className="men-ind-section">
        <div className="men-ind-image">
          <img src={product.image} alt="" />
        </div>
        <div className="men-ind-details space">
          <div className="men-ind-company">
            <h2>{product.company}</h2>
          </div>
          <div className="men-ind-model space">
            <h3>{product.model}</h3>
          </div>
          <div className="men-ind-price space">
            <h2>{product.price}</h2>
          </div>
          <div className="men-ind-desc space">
            <p>{product.description}</p>
          </div>
          <button onClick={()=>addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default MenSingle;
