import React from "react";
import { furnitureData } from "../data/furniture";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import '../styles/Furniture.css';


import { useCart } from "../context/CartContext";

const FurnitureSingle = () => {
  const { id } = useParams();

  const {addToCart, cartItems} = useCart()

  const product = furnitureData.find((item) => item.id === id);

  return (
    <>
      <Navbar />
      <div className="furniture-ind-section">
        <div className="furniture-ind-image">
          <img src={product.image} alt="" />
        </div>
        <div className="furniture-ind-details space">
          <div className="furniture-ind-company">
            <h2>{product.company}</h2>
          </div>
          <div className="furniture-ind-model space">
            <h3>{product.model}</h3>
          </div>
          <div className="furniture-ind-price space">
            <h2>{product.price}</h2>
          </div>
          <div className="furniture-ind-desc space">
            <p>{product.description}</p>
          </div>
          <button onClick={()=>addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default FurnitureSingle;
