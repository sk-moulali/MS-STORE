import React from "react";
import { speakerData } from "../data/speaker";
import { Link } from "react-router-dom";
import '../styles/Speakers.css';


const Speakers = () => {
  const firstFiveImages = speakerData.slice(0, 5);

  return (
    <>
      <div className="speaker-proTitle">
        <h2>Speakers</h2>
      </div>
      <div className="speaker-proSection">
        {firstFiveImages.map((item) => {
          return (
            <div key={item.id} className="speaker-imgBox">
              <Link to='/speakers'>
              <img className="speaker-proImage" src={item.image} alt="" />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Speakers;
