import React from "react";
import { tvData } from "../data/tv";
import { Link } from "react-router-dom";
import '../styles/TV.css';


const TV = () => {
  const firstFiveImages = tvData.slice(0, 5);

  return (
    <>
      <div className="tv-proTitle">
        <h2>TV</h2>
      </div>
      <div className="tv-proSection">
        {firstFiveImages.map((item) => {
          return (
            <div key={item.id} className="tv-imgBox">
              <Link to='/tv'>
              <img className="tv-proImage" src={item.image} alt="" />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TV;
