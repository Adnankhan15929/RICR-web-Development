import React, { use, useState } from "react";
import CountryData from "../assets/CountryData.json";

const Currency = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  console.log(CountryData);

  return (
    <>
      <div className="bg-amber-50  p-5"></div>
      <div className="w-3xl bg-white rounded shadow border p-3 mx-auto ">
        <div className="grid grid-cols-2 gap-5">
          <div className="flex gap-3 border rounded">
            {from && (
              <img
                src={`https://flagsapi.com/${from.split(" ")[1]}/flat/64.png`}
                alt="flag"
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
          <div className="flex gap-3 border rounded">
            {to && (
              <img
                src={`https://flagsapi.com/${to.split(" ")[1]}/flat/64.png`}
                alt="flag"
              />
            )}
            <select
              name="to"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="p-3 overflow-hidden focus:outline-none w-full"
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
        </div>
      </div>
    </>
  );
};

export default Currency;
