import React from "react";

const ForgetPasswordModal = ({ onClose }) => {

    const handleSubmit = () =>{
         e.preventDefault();
    setLoading(true);
    console.log(formData);
    }
  return (
    <>
      <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
        <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg shadow-lg">
          <div className="flex justify-between px-6 py-4 border-b border-gray-300 items-center sticky top-0 bg-white">
            <h2 className="text-xl font-semibold text-gray-800">
              Reset Password
            </h2>
            <button
              onClick={() => onClose()}
              className="text-gray-600 hover:text-red-600 text-2xl transition"
            >
              ⊗
            </button>
          </div>


          <form onSubmit={handleSubmit}>
            <div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Old Password *
                  </label>
                  <input
                    type="password"
                    name="oldPassword"
                    value={formData.oldPassword}
                    onChange={handleInputChange}
                    className={`w-full border rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.oldPassword ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your old password"
                  />
                  {errors.oldPassword && (
                    <p className="text-red-600 text-xs mt-1">
                      {errors.oldPassword}
                    </p>
                  )}
                </div>
            </div>
          </form>

        </div>
      </div>
    </>
  );
};

export default ForgetPasswordModal;
