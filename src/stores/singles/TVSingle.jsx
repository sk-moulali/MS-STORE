import React from "react";
import { tvData } from "../data/tv";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";
import '../styles/Speakers.css';


const TVSingle = () => {
  const { id } = useParams();

  const {addToCart, cartItems} = useCart()

  const product = tvData.find((item) => item.id === id);

  return (
    <>
      <Navbar />
      <div className="tv-ind-section">
        <div className="tv-ind-image">
          <img src={product.image} alt="" />
        </div>
        <div className="tv-ind-details space">
          <div className="tv-ind-company">
            <h2>{product.company}</h2>
          </div>
          <div className="tv-ind-model space">
            <h3>{product.model}</h3>
          </div>
          <div className="tv-ind-price space">
            <h2>{product.price}</h2>
          </div>
          <div className="tv-ind-desc space">
            <p>{product.description}</p>
          </div>
          <button onClick={()=>addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default TVSingle;
