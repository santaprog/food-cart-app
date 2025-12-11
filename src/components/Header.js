import { LOGO_URL } from "../utils/constants";
import { useState} from "react";
import {Link } from "react-router-dom"

const Header = () => {
  // let changeName = "Logout";
  const [btnName,setBtnName]=useState("Login");
  return (
    <div className="header">
      <div className="logoHeader">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-item">
        <ul>
          <li><Link to="/" className="linkUrl">Home</Link></li>
          <li><Link to="/about" className="linkUrl">About Us</Link></li>
          <li><Link to="/cart" className="linkUrl">Cart</Link></li>
          <button
            className="login-btn"
            onClick={() => {
              // changeName = "Login";
              btnName =="Login" ? setBtnName("Logout") : setBtnName("Login");
             
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
