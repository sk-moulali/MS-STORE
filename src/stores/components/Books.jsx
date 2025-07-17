import React from "react";
import { booksData } from "../data/books";
import { Link } from "react-router-dom";
import '../styles/Books.css'

const Books = () => {
  const firstFiveImages = booksData.slice(0, 7);

  return (
    <>
      <div className="book-proTitle">
        <h2>Books</h2>
      </div>
      <div className="book-proSection">
        {firstFiveImages.map((item) => {
          return (
            <div key={item.id} className="book-imgBox">
              <Link to='/books'>
              <img className="book-proImage" src={item.image} alt="" />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Books;
