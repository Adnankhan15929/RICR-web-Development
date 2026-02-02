import React from "react";

const RestaurantMenu = () => {
  return (
    <div className="bg-gray-50 rounded-lg p-6 h-full overflow-y-auto">
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
        <div className="flex justify-between items-center"><h2 className="text-2xl font-bold text-gray-800 mb-4">Menu Management</h2>
        <button className="text-lg cursor-pointer font-semibold  text-white bg-(--color-secondary) w-fit rounded px-3 py-2">+Add Items</button></div>
        <div className="text-center text-gray-500 py-12">
          <p className="text-lg">Menu items will be displayed and managed here</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;