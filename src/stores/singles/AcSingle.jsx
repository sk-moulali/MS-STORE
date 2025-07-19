import React from "react";
import { acData } from "../data/ac";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import '../styles/AC.css'

import { useCart } from "../context/CartContext";

const AcSingle = () => {
  const { id } = useParams();

  const {addToCart, cartItems} = useCart()
  {console.log('cart : ',addToCart)}

  const product = acData.find((item) => item.id === id);

  return (
    <>
      <Navbar />
      <div className="ac-ind-section">
        <div className="ac-ind-image">
          <img src={product.image} alt="" />
        </div>
        <div className="ac-ind-details space">
          <div className="ac-ind-company">
            <h2>{product.company}</h2>
          </div>
          <div className="ac-ind-model space">
            <h3>{product.model}</h3>
          </div>
          <div className="ac-ind-price space">
            <h2>{product.price}</h2>
          </div>
          <div className="ac-ind-desc space">
            <p>{product.description}</p>
          </div>
          <button onClick={()=>addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default AcSingle;
