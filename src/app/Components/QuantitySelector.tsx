"use client";

import { useState } from "react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

interface QuantitySelectorProps {
  initialQuantity: number;
  maxQuantity: number;
}

const QuantitySelector = ({ initialQuantity, maxQuantity }: QuantitySelectorProps) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const isMaxQuantityExceeded = quantity > maxQuantity;

  return (
    <div className="flex items-center border border-gray-300 w-[196px] h-[48px] bg-white rounded-[4px]">
      {/* Decrease Button */}
      <button
        onClick={handleDecrease}
        className="flex items-center justify-center w-[48px] h-[48px] text-gray-700 hover:bg-gray-100 border-r border-gray-300"
        style={{ borderRadius: "0px" }}
      >
        <MinusIcon className="h-5 w-5" />
      </button>

      {/* Quantity Display */}
      <div
        className={`flex flex-col items-center justify-center w-[100px] h-full border ${
          isMaxQuantityExceeded ? "border-gray-400" : "border-[#C19A4D]"
        }`}
      >
        <div
          className={`flex items-center justify-center w-full h-[60%] ${
            isMaxQuantityExceeded ? "bg-white" : "bg-[#F8F4EC]"
          }`}
        >
          <span
            className={`text-[16px] font-semibold leading-[19.2px] ${
              isMaxQuantityExceeded ? "text-[#1E293B]" : "text-[#1E293B]"
            }`}
            style={{ fontFamily: "var(--font-chivo-mono)" }}
          >
            {quantity}
          </span>
        </div>
        <div
          className={`text-white w-full h-[40%] flex items-center justify-center ${
            isMaxQuantityExceeded ? "bg-gray-300" : "bg-[#C19A4D]"
          }`}
        >
          <span
            className={`text-[12px] font-medium leading-[14.28px] ${
              isMaxQuantityExceeded ? "text-[#808080]" : "text-white"
            }`}
            style={{ fontFamily: "var(--font-chivo-mono)" }}
          >
            {maxQuantity} PCS
          </span>
        </div>
      </div>

      {/* Increase Button */}
      <button
        onClick={handleIncrease}
        className="flex items-center justify-center w-[48px] h-[48px] text-gray-700 hover:bg-gray-100 border-l border-gray-300"
        style={{ borderRadius: "0px" }}
      >
        <PlusIcon className="h-5 w-5" />
      </button>
    </div>
  );
};

export default QuantitySelector;
