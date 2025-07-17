import React from "react";
import { mobileData } from "../data/mobiles";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import '../styles/Mobiles.css';


import { useCart } from "../context/CartContext";

const MobileSingle = () => {
  const { id } = useParams();

  const {addToCart, cartItems} = useCart()

  const product = mobileData.find((item) => item.id === id);

  return (
    <>
      <Navbar />
      <div className="mobile-ind-section">
        <div className="mobile-ind-image">
          <img src={product.image} alt="" />
        </div>
        <div className="mobile-ind-details space">
          <div className="mobile-ind-company">
            <h2>{product.company}</h2>
          </div>
          <div className="mobile-ind-model space">
            <h3>{product.model}</h3>
          </div>
          <div className="mobileind-price space">
            <h2>{product.price}</h2>
          </div>
          <div className="mobile-ind-desc space">
            <p>{product.description}</p>
          </div>
          <button onClick={()=>addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default MobileSingle;
