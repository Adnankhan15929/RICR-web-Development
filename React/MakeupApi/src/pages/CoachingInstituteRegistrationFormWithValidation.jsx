import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const CoachingInstituteRegistrationFormWithValidation = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    number: "",
    dob: "",
    qualification: "",
    course: "",
    about: "",
    pg: "",
    residentialAddress: "",
    pincode: "",
    city: "",
    guardianFN: "",
    guardianCN: "",
    requirement: "",
  });

  const clearForm = () => {
    setFormData({
      fullName: "",
      email: "",
      number: "",
      dob: "",
      qualification: "",
      course: "",
      about: "",
      pg: "",
      residentialAddress: "",
      pincode: "",
      city: "",
      guardianFN: "",
      guardianCN: "",
      requirement: "",
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      console.log(formData);
    } catch (error) {
      console.log(error.message);
    }
    clearForm();
  };
  return (
    <>
      <div className="text-lg">
        <div
          className="text-white text-3xl text-center p-5 justify-center items-center"
          id="form"
        >
          <h1>Coaching Institute Registration</h1>
        </div>
        <form onReser={clearForm} onSubmit={submitForm}>
          <div id="bodyofForm" className="space-y-5">
            <fieldset className="border rounded mx-2">
              <legend className="text-2xl font-bold">
                Personal Information
              </legend>
              <div className="mx-3 mt-2">
                <label htmlFor="fullName">Full Name: </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  required
                  value={setFormData.fullName}
                  placeholder="Enter your name"
                  className="border rounded px-2 focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div className="mx-3 mt-2">
                <label htmlFor="email">Email Address: </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="border rounded px-2"
                />
              </div>
              <div className="mx-3 mt-2">
                <label htmlFor="number">Mobile Number: </label>
                <input
                  type="number"
                  name="number"
                  required
                  placeholder="Enter your mobile number"
                  className="border rounded px-2"
                />
              </div>
              <div className="mx-3 my-2">
                <label htmlFor="dob">Date of Birth: </label>
                <input
                  type="date"
                  name="dob"
                  required
                  className="border rounded px-2"
                />
              </div>
            </fieldset>
            <fieldset className="border rounded mx-2">
              <legend className="text-2xl font-bold">Academic Details</legend>
              <div className="mx-3 mt-2">
                <label htmlFor="qualification">Qualification: </label>
                <select
                  name="qualification"
                  id="qualification"
                  className="border rounded px-2"
                >
                  <option value="select">--Select--</option>
                  <option value="10th">10th</option>
                  <option value="12th">12th</option>
                  <option value="graduate">Graduate</option>
                  <option value="postGraduate">Post Graduate</option>
                </select>
              </div>
              <div className="mx-3 my-2">
                <label htmlFor="pg">Percentage/Grade: </label>
                <input
                  type="text"
                  name="pg"
                  placeholder="Enter a percentage between 0-100 or a valid grade(A-F)"
                  className="border rounded px-2"
                />
              </div>
            </fieldset>
            <fieldset className="border rounded mx-2">
              <legend className="text-2xl font-bold">Course Information</legend>
              <div className="mx-3 my-2">
                <label htmlFor="course">Preferred Course: </label>
                <select
                  name="course"
                  id="course"
                  className="border rounded px-2"
                >
                  <option value="select2">--Select--</option>
                  <option value="iit-jee">IIT-JEE</option>
                  <option value="neet">NEET</option>
                  <option value="bankingExams">Banking Exams</option>
                  <option value="upsc">UPSC</option>
                </select>
              </div>
              <div className="mx-3 my-2">
                <label htmlFor="batchTime">Batch Timing Preference: </label>
                <input type="checkbox" name="morning" className="mx-4" />
                Morning
                <input type="checkbox" name="afternoon" className="mx-4" />
                Afternoon
                <input type="checkbox" name="evening" className="mx-4" />
                Evening
                <input type="checkbox" name="weekend" className="mx-4" />
                Weekend
              </div>
            </fieldset>
            <fieldset className="border rounded mx-2">
              <legend className="text-2xl font-bold">Address</legend>
              <div className="mx-3 my-2">
                <label htmlFor="residentialAddress">
                  Residential Address:{" "}
                </label>
                <textarea
                  name="residentialAddress"
                  id="residentialAddress"
                  className="border rounded px-2"
                  placeholder="Enter your residential address"
                ></textarea>
              </div>
              <div className="mx-3 my-2">
                <label htmlFor="city">City: </label>
                <input
                  type="alphabet"
                  name="city"
                  className="border rounded px-2"
                  placeholder="Enter your city"
                />
              </div>
              <div className="mx-3 my-2">
                <label htmlFor="pinCode">Pin Code: </label>
                <input
                  type="number"
                  name="pinCode"
                  className="border rounded px-2"
                  placeholder="Enter your pincode"
                />
              </div>
            </fieldset>
            <fieldset className="border rounded mx-2">
              <legend className="text-2xl font-bold">Guardian Details</legend>
              <div className="mx-3 my-2">
                <label htmlFor="guardianFN">Guardian Full Name: </label>
                <input
                  type="text"
                  name="guardianFN"
                  className="border rounded px-2"
                  placeholder="Enter your guardian name"
                />
              </div>
              <div className="mx-3 my-2">
                <label htmlFor="guardianCN">Guardian's Contact Number: </label>
                <input
                  type="number"
                  name="guardianCN"
                  className="border rounded px-2"
                  placeholder="Enter your guardian number"
                />
              </div>
            </fieldset>
            <fieldset className="border rounded mx-2 mb-4">
              <legend className="text-2xl font-bold">
                Additional Information
              </legend>
              <div className="mx-3 my-2">
                <label htmlFor="about">How did you hear about us? </label>
                <select name="about" id="about" className="border rounded px-2">
                  <option value="select3">--Select--</option>
                  <option value="friends">Friends</option>
                  <option value="onlineAD">Online Ad</option>
                  <option value="newspaper">Newspaper</option>
                  <option value="socialMedia">Social Media</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="mx-3 my-2">
                <label htmlFor="requirement">Special Requirements: </label>
                <textarea
                  name="requirement"
                  id="requirement"
                  className="border rounded px-2"
                ></textarea>
              </div>
            </fieldset>
            <div className="text-center ">
              <button
                className="bg-green-600 text-white rounded px-5 py-2 me-3"
                type="submit"
              >
                Submit
              </button>
              <button
                className="bg-red-600 text-white rounded px-5 py-2"
                type="reset"
              >
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CoachingInstituteRegistrationFormWithValidation;
