import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

//use a single useState for all form data

const C1 = () => {
  const [contactData, setContactData] = useState({
    fullName: "",
    email: "",
    contact: "",
    religion: "",
    gender: "",
    skill: [],
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      let temp = contactData.skill;
      if (checked) {
        temp.push(value);
        setContactData((previousData) => ({ ...previousData, [name]: temp }));
      } else {
        temp = Object.values(temp); //convert to array
        temp = temp.filter((word) => word !== value); //remove unchecked value
        setContactData((previousData) => ({ ...previousData, [name]: temp }));
      }
    } else {
      setContactData((previousData) => ({ ...previousData, [name]: value }));
    }
  };
  // <input type="checkbox" name="skill" value="js" onChange={handleChange} checked={Object.values(contactData.skill).includes("js")} />JS;

  const handleClearForm = () => {
    setContactData({
      fullName: "",
      email: "",
      contact: "",
      religion: "",
      gender: "",
      skill: [],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      console.log(contactData);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
    handleClearForm();
  };
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
            <div className="my-5 text-lg">
              <label htmlFor="religion">Religion</label>
              <select name="religion" id="religion" onChange={handleChange}>
                <option value="">Select Religion</option>
                <option value="hindu">Hindu</option>
                <option value="muslim">Muslim</option>
                <option value="christian">Christian</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="gender">Gender</label>
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={handleChange}
                checked={contactData.gender === "male"}
              />{" "}
              Male
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={handleChange}
                checked={contactData.gender === "female"}
              />{" "}
              Female
              <input
                type="radio"
                name="gender"
                value="other"
                onChange={handleChange}
                checked={contactData.gender === "other"}
              />{" "}
              Other
            </div>
            <div>
              <label htmlFor="skill">Skill known</label>
              <input
                type="checkbox"
                name="skill"
                value="html"
                onChange={handleChange}
                checked={Object.values(contactData.skill).includes("html")}
              />{" "}
              Html
              <input
                type="checkbox"
                name="skill"
                value="css"
                onChange={handleChange}
                checked={Object.values(contactData.skill).includes("css")}
              />{" "}
              Css
              <input
                type="checkbox"
                name="skill"
                value="js"
                onChange={handleChange}
                checked={Object.values(contactData.skill).includes("js")}
              />{" "}
              JS
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

export default C1;
