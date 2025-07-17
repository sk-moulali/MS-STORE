import React from "react";
import { acData } from "../data/ac";
import { Link } from "react-router-dom";
import '../styles/AC.css'

const AC = () => {
  const firstFiveImages = acData.slice(0, 5);

  return (
    <>
      <div className="ac-proTitle">
        <h2>Air Condition</h2>
      </div>
      <div className="ac-proSection">
        {firstFiveImages.map((item) => {
          return (
            <div key={item.id} className="ac-imgBox">
              <Link to='/ac'>
              <img className="ac-proImage" src={item.image} alt="" />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AC;
