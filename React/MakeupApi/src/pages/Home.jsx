import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";

const Home = () => {
  return (
    <>
      <div className=" px-85 text-neutral-700" >
        <h1 className="pt-12 text-5xl text-center">Makeup API</h1>
        <p className="py-12 ">
          Welcome to the Makeup API. Explore our collection of makeup products
          and brands. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Veniam inventore rerum iste sint veritatis.
        </p>
      </div>
      <div className=" flex gap-1 align-center justify-center"> 
        <div className = "grid grid-rows-2 grid-cols-1 gap-2 ">
          <img src={img1} alt="i1" width="380px"/>
          <img src={img2} alt="i2" width="380px"/>
        </div>
        <div className = "grid grid-rows-1 grid-cols-1 px-1">
          <img src={img3} alt="i3" width="380px"/>

        </div>
        <div className = "grid grid-rows-2 grid-cols-1 gap-2">
          <img src={img4} alt="i4" width="380px"/>
          <img src={img5} alt="i5" width="380px"/>
        </div>
      </div>
    </>
  );
};

export default Home;
