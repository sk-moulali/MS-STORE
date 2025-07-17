import React from "react";
import { womanData } from "../data/woman";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import '../styles/Woman.css';


import { useCart } from "../context/CartContext";

const WomanSingle = () => {
  const { id } = useParams();

  const {addToCart, cartItems} = useCart()

  const product = womanData.find((item) => item.id === id);

  return (
    <>
      <Navbar />
      <div className="woman-ind-section">
        <div className="woman-ind-image">
          <img src={product.image} alt="" />
        </div>
        <div className="woman-ind-details space">
          <div className="woman-ind-company">
            <h2>{product.company}</h2>
          </div>
          <div className="woman-ind-model space">
            <h3>{product.model}</h3>
          </div>
          <div className="woman-ind-price space">
            <h2>{product.price}</h2>
          </div>
          <div className="woman-ind-desc space">
            <p>{product.description}</p>
          </div>
          <button onClick={()=>addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default WomanSingle;
