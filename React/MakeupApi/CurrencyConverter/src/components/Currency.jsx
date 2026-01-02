// https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/.json`
// https://flagsapi.com//flat/48.png

import React, { useState } from "react";
import CountryData from "../assets/CountryData.json";

const Currency = () => {
  const [from, setFrom] = useState(" ");
  const [to, setTo] = useState(" ");
  const [fromAmt, setFromAmt] = useState(" ");
  const [toAmt, setToAmt] = useState(" ");

  return (
    <>
      <div className="bg-green-200 h-screen p-5">
        <div className="border rounded shadow w-3xl p-3 mx-auto space-y-4">
          <div className="grid grid-cols-2 gap-10">
            <div className="flex p-3 gap-3 border rounded mx-auto">
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
                className=" border-none hover:border-none"
              >
                <option value="">--Select--</option>
                {CountryData.map((country, idx) => (
                  <option
                    value={country.CurrencyCode + " " + country.CountryCode}
                    key={idx}
                  >
                    {country.CountryName}
                  </option>
                ))}
                ;
              </select>
            </div>
            <div className="flex p-3 gap-3 border rounded mx-auto">
              {to && (
                <img
                  src={`https://flagsapi.com/${to.split(" ")[1]}/flat/48.png`}
                  alt=""
                />
              )}
              <select
                name="from"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className=" border-none hover:border-none"
              >
                <option value="">--Select--</option>
                {CountryData.map((country, idx) => (
                  <option
                    value={country.CurrencyCode + " " + country.CountryCode}
                    key={idx}
                  >
                    {country.CountryName}
                  </option>
                ))}
                ;
              </select>
            </div>
          </div>
          <div className="flex gap-3 mx-auto py-3 ">
            <label htmlFor="fromAmt">Amount:</label>
            <input type="number" name="fromAmt" className="w-full" />
          </div>
          <button className="w-full p-5 text-center bg-cyan-500 text-amber-300 hover:bg-blue-600 hover:text-blue-50">
            Convert
          </button>
        </div>
      </div>
    </>
  );
};

export default Currency;
