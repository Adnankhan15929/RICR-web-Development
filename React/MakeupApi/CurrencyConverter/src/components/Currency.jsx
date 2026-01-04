import React, { useState } from "react";
import CountryData from "../assets/CountryData.json";
import { LuArrowRightLeft } from "react-icons/lu";
import toast from "react-hot-toast";
import axios from "axios";

const Currency = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [fromAmt, setFromAmt] = useState("");
  const [toAmt, setToAmt] = useState();

  const convert = async () => {
    if (!from || !to || !fromAmt) {
      toast.error("Fill the missing input");
      return;
    }
    try {
      const res = await axios.get(
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from
          .split(" ")[0]
          .toLowerCase()}.json`
      );

      setToAmt(
        Number(fromAmt) *
          res.data[from.split(" ")[0].toLowerCase()][
            to.split(" ")[0].toLowerCase()
          ]
      );
      toast.success("Conversion Successful");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const swap = () => {
    let temp = from;
    setFrom(to);
    setTo(temp);
  };

  return (
    <>
      <div className="bg-li h-screen p-5">
        <div className="border rounded shadow w-3xl p-3 mx-auto space-y-5 bg-h">
          <div className="relative grid grid-cols-2 gap-10">
            <div className="flex px-3 gap-2 border rounded">
              {from && (
                <img
                  src={`https://flagsapi.com/${from.split(" ")[1]}/flat/48.png`}
                  alt=""
                />
              )}
              <select
                name="from"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="p-3 overflow-hidden w-full focus:outline-none"
              >
                <option value="">--Select Country--</option>
                {CountryData.map((country, idx) => (
                  <option
                    value={country.CurrencyCode + " " + country.CountryCode}
                    key={idx}
                  >
                    {country.CountryName}
                  </option>
                ))}
                
              </select>
            </div>
            <div className="flex px-3 gap-2 border rounded">
              {to && (
                <img
                  src={`https://flagsapi.com/${to.split(" ")[1]}/flat/48.png`}
                  alt=""
                />
              )}
              <select
                name="to"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="p-3 overflow-hidden w-full focus:outline-none"
              >
                <option value="">--Select Country--</option>
                {CountryData.map((country, idx) => (
                  <option
                    value={country.CurrencyCode + " " + country.CountryCode}
                    key={idx}
                  >
                    {country.CountryName}
                  </option>
                ))}
              </select>
            </div>
            <div className="absolute left-1/2 -translate-x-[50%] top-3  ">
              <button
                className="bg-li text-tt scale-120 hover:scale-170 hover:duration-300 duration-300 hover:bg-tt hover:text-white "
                onClick={swap}
              >
                <LuArrowRightLeft />
              </button>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <label htmlFor="fromAmt">Amount:</label>
            <input
              type="number"
              name="fromAmt"
              value={fromAmt}
              onChange={(e) => setFromAmt(e.target.value)}
              className="w-full p-3 rounded border"
              placeholder="Enter the amount"
            />
          </div>
          <button
            className="w-full px-4 py-2 rounded bg-tt text-white hover:bg-li hover:text-tt "
            onClick={convert}
          >
            Convert
          </button>

          <div className="border" />

          <div className="flex gap-3 items-center pb-2">
            <label htmlFor="toAmt">
              Converted Amount: {toAmt === null ? "XXXXX" : toAmt}
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Currency;
