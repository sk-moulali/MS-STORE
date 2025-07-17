import React from "react";
import { womanData } from "../data/woman";
import { Link } from "react-router-dom";
import '../styles/Woman.css';


const Woman = () => {
  const firstFiveImages = womanData.slice(0, 5);

  return (
    <>
      <div className="woman-proTitle">
        <h2>Woman Dressing</h2>
      </div>
      <div className="woman-proSection">
        {firstFiveImages.map((item) => {
          return (
            <div key={item.id} className="woman-imgBox">
              <Link to='/woman'>
              <img className="woman-proImage" src={item.image} alt="" />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Woman;
