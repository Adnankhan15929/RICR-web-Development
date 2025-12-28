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
      <div className=" px-75 pt-15 text-neutral-700">
        <h1 className=" text-5xl text-center font-stretch-50% " id="makeUpH">
          Makeup API
        </h1>
        <p className="py-10 text-left text-sm">
          Welcome to the Makeup API. Explore our collection of makeup products
          and brands. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Veniam inventore rerum iste sint veritatis.
        </p>
      </div>
      <div className="px-35 flex gap-1 align-center justify-center">
        <div className="grid grid-rows-2 grid-cols-1 gap-2 ">
          <img src={img1} alt="i1" width="440px" />
          <img src={img2} alt="i2" width="440px" />
        </div>
        <div className="grid grid-rows-1 grid-cols-1 px-1">
          <img src={img3} alt="i3" width="440px" />
        </div>
        <div className="grid grid-rows-2 grid-cols-1 gap-2">
          <img src={img4} alt="i4" width="440px" />
          <img src={img5} alt="i5" width="440px" />
        </div>
      </div>
      <div className="px-35 mt-15 text-2xl ">
        <h2>About the Makeup API</h2>
        <hr />
        <ul className="list-disc p-15 ps-20 text-lg">
          <li className="pb-9 ">
            <span className="font-semibold">Protocol:</span>The transport is
            HTTP. This API conforms to REST principals
          </li>
          <li className="pb-9">
            <span className="font-semibold">API Endpoints:</span>The endpoint
            for the current API version is: <br /><br />
            <span className="ps-5 underline text-amber-900">https://makeup-api.herokuapp.com/api/v1/products.json</span>
          </li>
          <li className="pb-9">
            <span className="font-semibold">
              There is currently one API call:
            </span>
            Search makeup products
          </li>
          <li className="pb-9">
            <span className="font-semibold">Type:</span>Get
          </li>
          <li className="pb-9">
            <span className="font-semibold">Response Format:</span>json
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
