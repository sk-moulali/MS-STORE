import React from "react";
import { Link } from "react-router-dom";
import '../styles/Navbar.css';
import { useCart } from "../context/CartContext";

const Navbar = () => {

  const {cartItems }= useCart()

  return (
    <div className="navbar-section">

      <div className="navSection">
        <Link to='/' className="custom-link">
          <div className="title">
            <h2>MS STORE</h2>
          </div>
        </Link>

        <div className="search">
          <input type="text" placeholder="Search..." />
        </div>

        <div className="user">
          <div className="user-detail">Sign In / Sign Up</div>
        </div>

        <Link to= '/cart' className="custom-link">
          <div className="cart">CART
            <span>
              {cartItems.length}
            </span>
          </div>
        </Link>
      </div>
      
      <div className="subMenu">
        <ul>
          <Link to="/mobiles" className="custom-link">
            <li>Mobiles</li>
          </Link>

          <Link to="/computers" className="custom-link">
            <li>Computers</li>
          </Link>

          <Link to="/watch" className="custom-link">
            <li>Watches</li>
          </Link>

          <Link to="/men" className="custom-link">
            <li>Mens Wear</li>
          </Link>

          <Link to="/woman" className="custom-link">
            <li>Woman Wear</li>
          </Link>

          <Link to="/furniture" className="custom-link">
            <li>Furniture</li>
          </Link>

          <Link to="/kitchen" className="custom-link">
            <li>Kitchen</li>
          </Link>

          <Link to="/fridge" className="custom-link">
            <li>Fridge</li>
          </Link>
          
          {/* <Link to="/books" className="custom-link">
            <li>Books</li>
          </Link> */}

          <Link to="/speakers" className="custom-link">
            <li>Speakers</li>
          </Link>

          <Link to="/tv" className="custom-link">
            <li>TV's</li>
          </Link>

          <Link to="/ac" className="custom-link">
            <li>AC</li>
          </Link>
        </ul>
      </div>
    </div >
  );
};

export default Navbar;
