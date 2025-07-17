import React from "react";

import { computerData } from "../data/computers";
import { Link } from "react-router-dom";
import '../styles/Computers.css';

const Computers = () => {
  const firstFiveImages = computerData.slice(0, 5);

  return (
    <>
      <div className="computer-proTitle">
        <h2>Computers</h2>
      </div>
      <div className="computer-proSection">
      {firstFiveImages.map((item) => {
        return (
          <div key={item.id} className="computer-imgBox">
            <Link to='/computers'>
            <img className="computer-proImage" src={item.image} alt="" />
            </Link>
          </div>
        );
      })}
      </div>
    </>
  );
};

export default Computers;
