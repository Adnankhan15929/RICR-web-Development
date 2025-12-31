import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";

const CoachingInstituteRegistrationFormWithValidation = () => {
  const [validationFunction, setValidationFunction] = useState({});
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
    timing: "",
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
      timing: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({ ...previousData, [name]: value }));
  };

  const validate = () => {
    let Error = {};
    if (formData.fullName.length < 3) {
      Error.fullName = "*Name should be more than 3 characters";
    } else {
      if (!/^[A-Za-z ]+$/.test(formData.fullName)) {
        Error.fullName = "*Only contain A-Z, a-z and space";
      }
    }

    if (
      !/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(
        formData.email
      )
    ) {
      Error.email = "*Use proper email format";
    }
    if (!/^[6-9]\d{9}$/.test(formData.number)) {
      Error.number = "*Only Indian numbers allowed";
    }

    if(!formData.dob>14){
      Error.dob = "*Student is at least 15 years old"
    }

    if(!/^[A-F]+$/.test(formData.pg) || formData.pg<0 || formData.pg>100){
      Error.pg = "*A percentage (0-100) or a letter grade (A-F)";
    }

    if(!/^[A-Za-z]+$/.test(formData.city))
    {
      Error.city = "*City should contain only letters"
    }

    if(formData.pincode!==6)
    {
      Error.city = "*Must be exactly 6 digits"
    }

    if (!/^[6-9]\d{9}$/.test(formData.guardianCN)) {
      Error.number = "*Only Indian numbers allowed";
    }

    setValidationFunction(Error);
    return Objects.keys(Error).length > 0 ? false : true;
  };
  const submitForm = (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Fill the form correctly");
      return;
    }
    try {
      console.log(formData);
      toast.success("Registration Successfully");
      clearForm();
    } catch (error) {
      console.log(error.message);
    }
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
        <form onReset={clearForm} onSubmit={submitForm}>
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
                  required
                  value={setFormData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="border rounded px-2 focus:outline-none focus:border-indigo-500"
                />
                {validationFunction.fullName && (
                  <span className="text-red-600 text-sm items-center ps-1">
                    {validationFunction.fullName}
                  </span>
                )}
              </div>
              <div className="mx-3 mt-2">
                <label htmlFor="email">Email Address: </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={setFormData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="border rounded px-2"
                />
                {validationFunction.email && (
                  <span className="text-red-600 text-sm items-center ps-1">
                    {validationFunction.email}
                  </span>
                )}
              </div>
              <div className="mx-3 mt-2">
                <label htmlFor="number">Mobile Number: </label>
                <input
                  type="number"
                  name="number"
                  required
                  value={setFormData.number}
                  onChange={handleChange}
                  placeholder="Enter your mobile number"
                  className="border rounded px-2"
                />
                {validationFunction.number && (
                  <span className="text-red-600 text-sm items-center ps-1">
                    {validationFunction.number}
                  </span>
                )}
              </div>
              <div className="mx-3 my-2">
                <label htmlFor="dob">Date of Birth: </label>
                <input
                  type="date"
                  name="dob"
                  value={setFormData.dob}
                  onChange={handleChange}
                  required
                  className="border rounded px-2"
                />
                {validationFunction.dob && (
                  <span className="text-red-600 text-sm items-center ps-1">
                    {validationFunction.dob}
                  </span>
                )}
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
                  onChange={handleChange}
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
                  value={setFormData.pg}
                  onChange={handleChange}
                />
                {validationFunction.pg && (
                  <span className="text-red-600 text-sm items-center ps-1">
                    {validationFunction.pg}
                  </span>
                )}
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
                  onChange={handleChange}
                >
                  <option value="select2">--Select--</option>
                  <option value="iit-jee">IIT-JEE</option>
                  <option value="neet">NEET</option>
                  <option value="bankingExams">Banking Exams</option>
                  <option value="upsc">UPSC</option>
                </select>
              </div>
              <div className="mx-3 my-2">
                <label htmlFor="timing">Batch Timing Preference: </label>
                <select
                  name="timing"
                  id="timing"
                  className="border rounded px-2"
                  onChange={handleChange}
                >
                  <option value="select4">--Select</option>
                  <option value="morning">Morning</option>
                  <option value="afternoon">Afternoon</option>
                  <option value="evening">Evening</option>
                  <option value="weekend">Weekend</option>
                </select>
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
                  value={setFormData.residentialAddress}
                  onChange={handleChange}
                  id="residentialAddress"
                  className="border rounded px-2"
                  placeholder="Enter your residential address"
                  required
                ></textarea>
                {validationFunction.residentialAddress && (
                  <span className="text-red-600 text-sm items-center ps-1">
                    {validationFunction.residentialAddress}
                  </span>
                )}
              </div>
              <div className="mx-3 my-2">
                <label htmlFor="city">City: </label>
                <input
                  type="text"
                  name="city"
                  value={setFormData.city}
                  onChange={handleChange}
                  className="border rounded px-2"
                  placeholder="Enter your city"
                  required
                />
                {validationFunction.city && (
                  <span className="text-red-600 text-sm items-center ps-1">
                    {validationFunction.city}
                  </span>
                )}
              </div>
              <div className="mx-3 my-2">
                <label htmlFor="pincode">Pin Code: </label>
                <input
                  type="number"
                  name="pincode"
                  className="border rounded px-2"
                  placeholder="Enter your pincode"
                  value={setFormData.pincode}
                  onChange={handleChange}
                />
                {validationFunction.pincode && (
                  <span className="text-red-600 text-sm items-center ps-1">
                    {validationFunction.pincode}
                  </span>
                )}
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
                  value={setFormData.guardianFN}
                  onChange={handleChange}
                />
              </div>
              <div className="mx-3 my-2">
                <label htmlFor="guardianCN">Guardian's Contact Number: </label>
                <input
                  type="number"
                  name="guardianCN"
                  className="border rounded px-2"
                  placeholder="Enter your guardian number"
                  value={setFormData.guardianCN}
                  onChange={handleChange}
                />
                {validationFunction.guardianCN && (
                  <span className="text-red-600 text-sm items-center ps-1">
                    {validationFunction.guardianCN}
                  </span>
                )}
              </div>
            </fieldset>
            <fieldset className="border rounded mx-2 mb-4">
              <legend className="text-2xl font-bold">
                Additional Information
              </legend>
              <div className="mx-3 my-2">
                <label htmlFor="about">How did you hear about us? </label>
                <select
                  name="about"
                  id="about"
                  className="border rounded px-2"
                  onChange={handleChange}
                >
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
                  value={setFormData.requirement}
                  onChange={handleChange}
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
