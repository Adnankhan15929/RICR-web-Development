import React, { useState } from "react";
import toast from "react-hot-toast";
import ElectricBorder from '../pages/ElectricBorder';
import api from "../config/Api";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [validationError, setValidationError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClearForm = () => {
    setFormData({
      fullName: "",
      email: "",
      mobileNumber: "",
      password: "",
      confirmPassword: "",
    });
  };

  const validate = () => {
    let Error = {};

    if (formData.fullName.length < 3) {
      Error.fullName = "Name should be More Than 3 Characters";
    } else {
      if (!/^[A-Za-z ]+$/.test(formData.fullName)) {
        Error.fullName = "Only Contain A-Z , a-z and space";
      }
    }

    if (
      !/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(
        formData.email
      )
    ) {
      Error.email = "Use Proper Email Format";
    }

    if (!/^[6-9]\d{9}$/.test(formData.mobileNumber)) {
      Error.mobileNumber = "Only Indian Mobile Number allowed";
    }

    setValidationError(Error);

    return Object.keys(Error).length > 0 ? false : true;
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!validate()) {
      setIsLoading(false);
      toast.error("Fill the Form Correctly");
      return;
    }

    try {
      const res = await api.post("/auth/register",formData)
      toast.success(res.data.message);
      handleClearForm();
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
    
      <div className="min-h-screen bg-linear-to-br bg-(--color-background) py-6 px-4">
        <div className="max-w-xl mx-auto ">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-(--color-text-primary) mb-2">
              Registration
            </h1>
            <p className="text-lg text-(--color-text-primary)">
              You are 1 step away to stop your Cavings
            </p>
          </div>

          <ElectricBorder
        color="#F4D35E"
        speed={1}
        chaos={0.2}
        thickness={1}
        style={{ borderRadius: 16 }}
      >
        <div className=""> 
          <p style={{ margin: "6px 0 0", opacity: 0.8 }}>
           {/* Form Container */}
          <div className="bg-(--color-tertiary) rounded-xl shadow-2xl overflow-hidden">
            <form
              onSubmit={handleSubmit}
              onReset={handleClearForm}
              className="p-8"
            >
              {/* Personal Information */}
              <div className="mb-10">
                <div className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full h-fit px-4 py-3 border-b-2 border-gray-300  focus:outline-none focus:border-(--color-secondary-hover) transition"
                    />
                    {validationError.fullName && (
                      <span className="text-xs text-red-500">
                        {validationError.fullName}
                      </span>
                    )}
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full h-fit px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition"
                  />
                  <input
                    type="tel"
                    name="mobileNumber"
                    placeholder="Mobile Number"
                    maxLength="10"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition"
                  />
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    placeholder="Create Password"
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition"
                  />
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex gap-4 pt-8 border-t-2 border-gray-200">
                <button
                  type="submit"
                  className="flex-1 bg-linear-to-r bg-(--color-secondary) text-black font-bold py-4 px-6 rounded-lg hover:from-green-700 hover:to-green-800 transition duration-300 transform hover:scale-105 shadow-lg hover:text-white"
                >
                  Submit Registration
                </button>
                <button
                  type="reset"
                  className="flex-1 bg-gray-300 text-gray-800 font-bold py-4 px-6 rounded-lg hover:bg-gray-400 transition duration-300 transform hover:scale-105"
                >
                  Clear Form
                </button>
              </div>
            </form>
          </div>
          </p>
        </div>
      </ElectricBorder>
          

          {/* Footer Note */}
          <p className="text-center text-gray-600 mt-8 text-sm">
            All fields marked are mandatory. We respect your privacy.
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;