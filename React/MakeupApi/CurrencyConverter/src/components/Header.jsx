import React from 'react'
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaEuroSign } from "react-icons/fa";
import { HiCurrencyRupee } from "react-icons/hi2";

const Header = () => {
  return (
    <>
        <div className='bg-tt text-white px-4 py-2 text-center text-dark flex justify-center items-center' id="header">
            <RiMoneyDollarCircleFill className='text-3xl font-bold animate-bounce' />
            <FaEuroSign  className='text-3xl font-bold animate-spin'/>
            <span className='text-3xl font-bold'>
                Currency converter
            </span>
            <FaIndianRupeeSign className='text-3xl font-bold animate-pulse'/>    
            <HiCurrencyRupee className='text-3xl font-bold animate-ping'/>
        </div>
    </>
  )
}

export default Header