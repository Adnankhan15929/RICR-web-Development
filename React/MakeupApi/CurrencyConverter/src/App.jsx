import React from 'react'
import Header from "./components/Header";
import Currency from './components/Currency';
import Cu1 from './components/Cu1'; 
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <>
      <Header/>
      <Toaster/>
      <Currency/>
      {/* <Cu1/> */}
    </>
  )
}

export default App