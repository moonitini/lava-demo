"use client";

import QuantitySelector from "./QuantitySelector";

const materials = [
  { name: "Gildan T-Shirt - Red / M", image: "/images/red-shirt.png", isWhite: false },
  { name: "Gildan T-Shirt - Red / L", image: "/images/red-shirt.png", isWhite: false },
  { name: "Gildan T-Shirt - Black / S", image: "/images/black-shirt.png", isWhite: false },
  { name: "Gildan T-Shirt - Black / M", image: "/images/black-shirt.png", isWhite: false },
  { name: "Gildan T-Shirt - Black / L", image: "/images/black-shirt.png", isWhite: false },
  { name: "Gildan T-Shirt - White / S", image: "/images/white-shirt.png", isWhite: true },
  { name: "Gildan T-Shirt - White / M", image: "/images/white-shirt.png", isWhite: true },
  { name: "Gildan T-Shirt - White / L", image: "/images/white-shirt.png", isWhite: true },
];

const MaterialsList = () => {
  return (
    <div className="p-6">

      {/* Materials List */}
      <div className="space-y-0">
        {materials.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-2"
          >
            {/* Image & Name */}
            <div className="flex items-center space-x-3">
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-md border ${
                  item.isWhite ? "bg-[#333333]" : "bg-white border-gray-300"
                }`}
              >
                <img src={item.image} alt={item.name} className="w-6 h-6" />
              </div>
              <span className="text-[16px] font-normal text-gray-800">{item.name}</span>
            </div>

            {/* Quantity Selector */}
            <QuantitySelector initialQuantity={24} maxQuantity={24} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaterialsList;
