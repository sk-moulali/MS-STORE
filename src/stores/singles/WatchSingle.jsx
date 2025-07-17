import React from "react";
import { watchData } from "../data/watch";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import '../styles/Watch.css';


import { useCart } from "../context/CartContext";

const WatchSingle = () => {
  const { id } = useParams();

  const {addToCart, cartItems} = useCart()

  const product = watchData.find((item) => item.id === id);

  return (
    <>
      <Navbar />
      <div className="watch-ind-section">
        <div className="watch-ind-image">
          <img src={product.image} alt="" />
        </div>
        <div className="watch-ind-details space">
          <div className="watch-ind-company">
            <h2>{product.company}</h2>
          </div>
          <div className="watch-ind-model space">
            <h3>{product.model}</h3>
          </div>
          <div className="watch-ind-price space">
            <h2>{product.price}</h2>
          </div>
          <div className="watch-ind-desc space">
            <p>{product.description}</p>
          </div>
          <button onClick={()=>addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default WatchSingle;
