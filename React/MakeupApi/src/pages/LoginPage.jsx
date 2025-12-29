import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


// Login form page


const LoginPage = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleClearForm= () => {
    setContactData({
      name:"",
      email:"",
      password:"",
    })
  };

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setContactData((previousData) => ({ ...previousData, [name]: value }));
  };

  const [isLoading, setIsLoading] = useState(false);
  
  const login = async (e)=>{
    e.preventDefault();
    setIsLoading(true);
    try{
      console.log(contactData);
    }catch(error){
      console.log(error.message);
    }
    finally{
      setIsLoading(false);
    }
    handleClearForm();
  }
  return (
    <>
      <div>
        {/* login page */}
        <div className="container m-10 text-center">
          <h1 className="text-3xl">Login Page</h1>
          <form onSubmit={login}>
            <div className="">
              <div className="my-5 text-lg">
                <label htmlFor="name">Name: </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="border rounded px-2"
                  value={contactData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="my-5 text-lg">
                <label htmlFor="email">Email: </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="border rounded px-2"
                  value={contactData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="my-5 text-lg">
                <label htmlFor="password">Password: </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  required
                  className="border rounded px-2 "
                  value={contactData.password}
                  onChange={handleChange}
                />
              </div>
              <div className="">
                <button
                  className="bg-blue-700 text-white rounded px-10 py-3"
                  type="login"
                >
                  {
                    isLoading ? "Loading...": "Login Now"
                  }
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
