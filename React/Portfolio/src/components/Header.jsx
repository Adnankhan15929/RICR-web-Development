import react from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex justify-between bg-blue-800 text-white p-4 items-center opacity-85">
        <h1 className="text-3xl">Portfolio.</h1>
        <div className="flex gap-5 ">
          <div>About</div>
          <div>Contact</div>
          <div>Connect</div>
        </div>
      </div> 
    </>
  );
};

export default Header;
