import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const About = () => {
  // const [fullName, setFullName] = useState("");
  // const [email, setEmail] = useState("");
  // const [contact, setContact] = useState("");

  const [contactData, setContactData] = useState({
    fullName: "",
    email: "",
    contact: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContactData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };
 
  const handleClearForm = () => {};

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const respose = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
    handleClearForm();
  };

  // const handleClearForm = () => {
  //   setFullName("");
  //   setEmail("");
  //   setContact("");
  // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   setIsLoading(true);
  //   try {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/posts"
  //     );
  //     const data = {
  //       fullName,
  //       email,
  //       contact,
  //     };
  //     console.log("Form Data Submitted:", data);
  //   } catch (error) {
  //     console.log(error.message);
  //   } finally {
  //     setIsLoading(false);
  //   }

  //   handleClearForm();
  // };

  return (
    <>
      <div className="text-center px-96 text-neutral-700 font-family: 'Abel', sans-serif ">
        <h1 className="text-4xl pb-5">Contact Us</h1>
        <div htmlFor="container text-xl">
          <form onReset={handleClearForm} onSubmit={handleSubmit}>
            <div>
              <label htmlFor="fullName">Full Name: </label>
              <input
                type="text"
                name="fullName"
                className="border m-3 rounded p-1 text-blue-900"
                value={contactData.fullName}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                className="border m-3 rounded p-1 text-blue-900"
                value={contactData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label htmlFor="contact">Contact:</label>
              <input
                type="number"
                name="contact"
                className="border m-3 rounded p-1 text-blue-900"
                value={contactData.contact}
                onChange={handleChange}
                placeholder="Enter your phone no."
                required
              />
            </div>
            <button
              className=" bg-amber-400 border border-black me-3 rounded p-1"
              type="submit"
            >
              {isLoading ? "Loading..." : "Submit"}
            </button>
            <button
              className=" bg-blue-700 border border-black rounded p-1"
              type="reset"
            >
              Reset
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default About;

// const About = () => {
//   return
//   <>

//   </>;
// };

// export default About;
