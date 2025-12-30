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
        <p className="py-12 text-left text-sm">
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
            for the current API version is: <br />
            <br />
            <span className="ps-5 underline text-amber-900">
              https://makeup-api.herokuapp.com/api/v1/products.json
            </span>
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
      <div className="px-35 mt-15 text-2xl ">
        <h2>Examples</h2>
        <hr />
        <ul className="list-disc p-15 ps-20 text-lg">
          <li className="pb-9 ">
            To search for the brand “maybelline”, append ‘brand=maybelline’. For
            example:
            <br />
            <br />
            <span className="ps-5 underline text-amber-900">
              http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline
            </span>
          </li>
          <li className="pb-9">
            To search for the “lipsticks” by the brand “covergirl”, you would
            append ‘brand=covergirl’ <br /> and ‘&product_type=lipstick’. For
            example:
            <br />
            <br />
            <span className="ps-5 underline text-amber-900">
              http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick
            </span>
          </li>
        </ul>
      </div>
      <div className="px-35 mt-15 text-2xl ">
        <h2>Search Parameters</h2>
        <hr />
        <ul className="list-disc p-15 ps-20 text-lg">
          <li className="pb-9 ">
            Search for products and filter them by brand, price, product
            category, tags and many more. Take a look at the <br />
            full list below!
          </li>
          <li className="pb-9">
            This API also provides visual representation of the all of JSON data
            that is available as well
          </li>
        </ul>
      </div>
      {/* <table className="text-center">
        <tr className="p-10 border">
          <th>Parameter</th>
          <th>Data type</th>
          <th>Description</th>
        </tr>
        <tr className="">
          <td>product_type</td>
          <td>string</td>
          <td>
            The type of makeup being searched for (ie. lipstick, eyeliner). See
            list of product types below. Will return a list of all products of
            this type
          </td>
        </tr>
        <tr>
          <td>product_category</td>
          <td>string</td>
          <td>
            Sub-category for each makeup-type. (ie. lip gloss is a category of
            lipstick). See product types below. If a category exists it will be
            under 'By Category'. Will return a list of all products of this
            category
          </td>
        </tr>
        <tr>
          <td>product_tags</td>
          <td>string, list separated by commas</td>
          <td>
            Options each product could be tagged with. (ie. vegan). each product
            can have multiple tags. If tags exist it will be in the product
            types under 'By Tag'. Will return a list of products filtered by all
            tags indicated
          </td>
        </tr>
        <tr>
          <td>brand_string</td>
          <td>string</td>
          <td>Brand of the product. Will return all products for each brand</td>
        </tr>
        <tr>
          <td>price_greater_than</td>
          <td>number</td>
          <td>
            Will return a list of products with price greater than indicated
            number (exclusive)
          </td>
        </tr>
        <tr>
          <td>price_less_than</td>
          <td>number</td>
          <td>
            Will return a list of products with price less than indicated number
            (exclusive)
          </td>
        </tr>
        <tr>
          <td>rating_greater_than</td>
          <td>number</td>
          <td>
            Will return a list of products with a rating more than indicated
            number (exclusive)
          </td>
        </tr>
        <tr>
          <td>rating_less_than</td>
          <td>number</td>
          <td>
            Will return a list of products with a rating less than indicated
            number (exclusive)
          </td>
        </tr>
      </table> */}
    </>
  );
};

export default Home;
