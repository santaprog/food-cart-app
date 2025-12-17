import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlinestatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  // let changeName = "Logout";
  const [btnName, setBtnName] = useState("Login");
  const {userName} = useContext(UserContext);

  const onlineStatus = useOnlineStatus();
  return (
    <div className="header flex justify-between">
      <div className="logoHeader">
        <img className="logo w-24" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-item flex">
        <ul className="flex p-4 m-4 items-center">
          <li className="p-2">
            {onlineStatus === true ? (
              <span className="text-green-600 text-lg">Available ●</span>
            ) : (
              <span className="text-red-600 text-lg">Offline ●</span>
            )}
          </li>
          <li className="p-2">
            <Link to="/" className="text-lg">
              Home
            </Link>
          </li>
          <li className="p-2">
            <Link to="/about" className="text-lg">
              About Us
            </Link>
          </li>
          <li className="p-2">
            <Link to="/grocery" className="text-lg">
              Grocery
            </Link>
          </li>
          <li className="p-2">
            <Link to="/cart" className="text-lg">
              Cart
            </Link>
          </li>
          <li className="p-2 text-lg font-bold">{userName}</li>
          <button
            className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded hover:cursor-pointer"
            onClick={() => {
              // changeName = "Login";
              btnName == "Login" ? setBtnName("Logout") : setBtnName("Login");
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
