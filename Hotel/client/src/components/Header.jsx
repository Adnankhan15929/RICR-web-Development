import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/hotelLogo.png";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-(--color-header-footer) px-4 py-2 flex justify-between items-center ">
        <Link to={"/"}>
          <img src={logo} alt="" className="h-12 w-20 object-cover" />
        </Link>
        <div>
          <Link
            to={"/"}
            className="text-decoration-none text-(--color-text-inverse) hover:text-(--color-accent) text-xl"
          >
            Home
          </Link>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => navigate("/login")}
            className="bg-(--color-secondary) py-2 px-4 font-bold hover:bg-red-600 hover:text-white rounded"
          >
            Login
          </button>
          <button
            className="bg-(--color-secondary) py-2 px-4 font-bold hover:bg-red-600 hover:text-white rounded"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
