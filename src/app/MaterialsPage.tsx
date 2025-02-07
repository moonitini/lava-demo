'use client'

import { useState } from "react";
import SearchBar from "./Components/SearchBar";
import MaterialsList from "./Components/MaterialsList";
import Button from "./Components/Button";

const MaterialsPage = () => {
  const [activeTab, setActiveTab] = useState("Inventory");

  return (
    <div className="p-4 flex flex-col items-center w-full">
      {/* Header Section with Correct Font & Spacing */}
      <div className="w-[1120px] flex flex-col pb-3 mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-[24px] font-medium leading-[28.8px] text-[#333333] font-uncut">
            <span className="text-black">Materials</span>
            <span className="text-[#AAAAAA]"> / Blanks</span>
          </h1>

          <div className="flex bg-gray-200 p-1 rounded-md w-fit">
            <button
              className={`px-3 py-1 text-[14px] font-medium leading-[16.8px] rounded-md transition-all ${
                activeTab === "Inventory" ? "bg-white shadow text-black" : "text-gray-500"
              }`}
              onClick={() => setActiveTab("Inventory")}
            >
              Inventory
            </button>
            <button
              className={`px-3 py-1 text-[14px] font-medium leading-[16.8px] rounded-md transition-all ${
                activeTab === "Order Queue" ? "bg-white shadow text-black" : "text-gray-500"
              }`}
              onClick={() => setActiveTab("Order Queue")}
            >
              Order Queue
            </button>
          </div>
        </div>
      </div>

      {/* Main Container - Materials Section */}
      <div className="relative w-[1120px] h-[630px] bg-white shadow-md rounded-lg p-4 mt-4 mx-auto">
        <div className="mt-1">
          {/* Align Search Bar and Button in Same Row */}
          <div className="flex items-center justify-between gap-4">
            <SearchBar />
            <Button text="Add New" icon={true} />
          </div>
        </div>
        <div className="mt-1">
          <MaterialsList />
        </div>
      </div>
    </div>
  );
};

export default MaterialsPage;
