import React from "react";
import { IoHome } from "react-icons/io5";
import { FcAbout } from "react-icons/fc";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="flex justify-between bg-black text-white py-2 px-3 items-center">
        <h1 className="text-3xl font-bold ">Makeup API</h1>
        <div className="flex gap-4 justify-center items-center">
          <Link className="" to={"/"}>
          <span className="flex justify-center items-center gap-1"><IoHome/>Home</span></Link>
          <Link className="" to={"/about"}>
          <span className="flex justify-center items-center gap-1"><FcAbout className="text-black"/>About</span></Link>
        </div>
      </div>
    </>
  );
};

export default Header;
