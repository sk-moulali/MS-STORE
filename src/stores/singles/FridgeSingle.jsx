import React from "react";
import { fridgeData } from "../data/fridge";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import '../styles/Fridge.css';


import { useCart } from "../context/CartContext";

const FridgeSingle = () => {
  const { id } = useParams();

  const {addToCart, cartItems} = useCart()

  const product = fridgeData.find((item) => item.id === id);

  return (
    <>
      <Navbar />
      <div className="fridge-ind-section">
        <div className="fridge-ind-image">
          <img src={product.image} alt="" />
        </div>
        <div className="fridge-ind-details space">
          <div className="fridge-ind-company">
            <h2>{product.company}</h2>
          </div>
          <div className="fridge-ind-model space">
            <h3>{product.model}</h3>
          </div>
          <div className="fridge-ind-price space">
            <h2>{product.price}</h2>
          </div>
          <div className="fridge-ind-desc space">
            <p>{product.description}</p>
          </div>
          <button onClick={()=>addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default FridgeSingle;
