import React from "react";
import tranparentLogo from "../assets/transparentLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const Header = () => {
  const { user, isLogin } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-(--color-primary) px-4 py-2 flex justify-between items-center w-full">
        <Link to={"/"}>
          <img
            src={tranparentLogo}
            alt=""
            className="h-12 w-20 object-cover invert-100 animate-bounce"
          />
        </Link>
        <div className="flex gap-4 ps-27">
          <Link
            to={"/"}
            className="text-decoration-none text-white hover:text-(--color-accent)"
          >
            Home
          </Link>
          <Link
            to={"/about"}
            className="text-decoration-none text-white hover:text-(--color-accent)"
          >
            About
          </Link>
          <Link
            to={"/contact"}
            className="text-decoration-none text-white hover:text-(--color-accent)"
          >
            Contact
          </Link>
        </div>
        <div className="flex gap-4">
          {isLogin ? (
            <span className="text-white">{user.fullName}</span>
          ) : (
            <div >
              <button
                onClick={() => navigate("/login")}
                className="bg-(--color-secondary) py-2 px-4 font-bold hover:bg-(--color-secondary-hover) hover:text-white rounded"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/register")}
                className="bg-(--color-secondary) py-2 px-4 font-bold hover:bg-(--color-secondary-hover) hover:text-white rounded "
              >
                Register
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
