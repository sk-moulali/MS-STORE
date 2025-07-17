import React from "react";
import '../styles/Books.css'
import { booksData } from "../data/books";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

import { useCart } from "../context/CartContext";

const BookSingle = () => {
  const { id } = useParams();

  const {addToCart, cartItems} = useCart()

  const product = booksData.find((item) => item.id === id);
  console.log(product)

  return (
    <>
      <Navbar />
      <div className="book-ind-section">
        <div className="book-ind-image">
          <img src={product.image} alt="" />
        </div>
        <div className="book-ind-details space">
          <div className="book-ind-company">
            <h2>{product.title}</h2>
          </div>
          <div className="book-ind-model space">
            <h3>{product.author}</h3>
          </div>
          <div className="book-ind-price space">
            <h2>{product.price}</h2>
          </div>
          <div className="book-ind-desc space">
            <p>{product.description}</p>
          </div>
          <button onClick={()=>addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default BookSingle;
