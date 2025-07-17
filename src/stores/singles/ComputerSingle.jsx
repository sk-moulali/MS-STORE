import React from "react";
import { computerData } from "../data/computers";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import '../styles/Computers.css';

import { useCart } from "../context/CartContext";

const ComputerSingle = () => {
  const { id } = useParams();

  const {addToCart, cartItems} = useCart()

  const product = computerData.find((item) => item.id === id);

  return (
    <>
      <Navbar />
      <div className="computer-ind-section">
        <div className="ind-image">
          <img src={product.image} alt="" />
        </div>
        <div className="computer-ind-details space">
          <div className="computer-ind-company">
            <h2>{product.company}</h2>
          </div>
          <div className="computer-ind-model space">
            <h3>{product.model}</h3>
          </div>
          <div className="computer-ind-price space">
            <h2>{product.price}</h2>
          </div>
          <div className="computer-ind-desc space">
            <p>{product.description}</p>
          </div>
          <button onClick={()=>addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default ComputerSingle;
