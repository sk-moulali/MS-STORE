import React from "react";
import Mobiles from "./Mobiles";
import Computers from "./Computers";
import Watch from "./Watch";
import Men from "./Men";
import Woman from "./Woman";
import Furniture from "./Furniture";
import AC from "./AC";
import Kitchen from "./Kitchen";
import Books from "./Books";
import Speakers from "./Speakers";
import TV from "./TV";
import Fridge from "./Fridge";
import banner from '/assets/banner1.jpg'
console.log('banner : ',banner)

const Products = () => {
  return (
    <div>
      <img src={banner} alt="banner image"  width={1280} style={{cursor:"pointer"}}/>
      <Mobiles />
      <Computers />
      <Watch />
      <Men />
      <Woman />
      <Furniture />
      <Kitchen />
      <Fridge/>
      <AC />
      {/* <Books/> */}
      <Speakers/>
      <TV/>
    </div>
  );
};

export default Products;
