import React from "react";
import { useAuth } from "../../../context/AuthContext.jsx";

const EditProfileModal = ({ onClose }) => {
    const {user} = useAuth();
  return (
    <>
      <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-100">
        <div className="bg-white w-5xl max-h-[85vh] overflow-y-auto" >
          <div className="">EditProfileModal</div>
          <div>
            <div>
          <span>Name: </span> <span>{user.fullName}</span>
        </div>
        <div>
          <span>Phone: </span> <span>{user.mobileNumber}</span>
        </div>
          </div>
          <button
            onClick={() => onClose()}
            className="cursor-pointer px-7 py-1 bg-green-500 text-white  rounded"
          >
            Clear
          </button>
          <button
            onClick={() => onClose()}
            className="cursor-pointer px-7 py-1 bg-green-500 text-white  rounded"
          >
            Update
          </button>
          

        </div>
      </div>
    </>
  );
};

export default EditProfileModal;
