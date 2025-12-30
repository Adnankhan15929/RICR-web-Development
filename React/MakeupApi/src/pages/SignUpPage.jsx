import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


// Sign Up page


const SignUpPage = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    password: "",
    ConfirmPassword: "",
  });

  const handleClearForm= () => {
    setContactData({
      name:"",
      email:"",
      password:"",
        ConfirmPassword:"",
    })
  };

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setContactData((previousData) => ({ ...previousData, [name]: value }));
  };

  const [isLoading, setIsLoading] = useState(false);
  
  const signUp = async (e)=>{
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
        {/* signup page */}
        <div className="container m-10 text-center">
          <h1 className="text-3xl">SignUp Page</h1>
          <form onSubmit={signUp}  className="container text-left ps-125 ">
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
                  placeholder="Create password"
                  required
                  className="border rounded px-2 "
                  value={contactData.password}
                  onChange={handleChange}
                />
              </div>
              <div className="my-5 text-lg">
                <label htmlFor="confirmpassword">Confirm Password: </label>
                <input
                  type="password"
                  name="ConfirmPassword"
                  placeholder="Confirm password"
                  required
                  className="border rounded px-2 "
                  value={contactData.ConfirmPassword}
                  onChange={handleChange}
                />
              </div>
              <div className="ms-15">
                <button
                  className="bg-blue-700 text-white rounded px-10 py-3"
                  type="signUp"
                >
                  {
                    isLoading ? "Loading...": "Sign Up Now"
                  }
                </button>
              </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;