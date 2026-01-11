import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/hotelLogo.png";


const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-(--primary) px-4 py-2 flex justify-between items-center ">
        <Link to={"/"}>
          <img
            src={logo}
            alt=""
            className="h-12 w-20 object-cover"
          />
        </Link>
        <div>
          <Link to={"/"} className="text-decoration-none text-white hover:text-(--accent)">
            Home
          </Link>
        </div>
        <div>
          <button className="bg-(--secondary) py-2 px-4 font-bold hover:bg-(--secondary-hover) hover:text-white rounded" onClick={()=> navigate("/register")}>Register</button>
        </div>
      </div>
    </>
  );
};

export default Header;
