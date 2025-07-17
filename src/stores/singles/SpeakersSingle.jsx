import React from "react";
import { speakerData } from "../data/speaker";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import '../styles/Speakers.css';

import { useCart } from "../context/CartContext";

const SpeakersSingle = () => {
  const { id } = useParams();

  const {addToCart, cartItems} = useCart()

  const product = speakerData.find((item) => item.id === id);
  // console.log(product.image)

  return (
    <>
      <Navbar />
      <div className="speaker-ind-section">
        <div className="speaker-ind-image">
          <img src={product.image} alt={product.product} />
        </div>
        <div className="speaker-ind-details space">
          <div className="speaker-ind-company">
            <h2>{product.product}</h2>
          </div>
          <div className="speaker-ind-model space">
            <h3>{product.model}</h3>
          </div>
          <div className="speaker-ind-price space">
            <h2>{product.price}</h2>
          </div>
          <div className="speaker-ind-desc space">
            <p>{product.description}</p>
          </div>
          <button onClick={()=>addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default SpeakersSingle;
