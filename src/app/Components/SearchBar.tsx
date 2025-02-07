import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const SearchBar = () => {
  return (
    <div className="flex items-center space-x-3">
      {/* Search Input Container */}
      <div className="flex items-center bg-white border border-gray-300 rounded-md px-3 py-2 w-[360px]">
        {/* Search Icon Inside */}
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 mr-2" />

        {/* Input Field */}
        <input
          type="text"
          placeholder="Search Materials"
          className="flex-1 outline-none text-gray-700 placeholder-gray-400"
        />
      </div>

      {/* Icons Outside */}
      <div className="flex space-x-2">
        <button className="hover:bg-gray-100">
          <Image
            src="/images/filter.svg" // InvertedTriangle
            alt="Filter Icon"
            width={20}
            height={20}
            className="text-gray-600"
          />
        </button>
        <button className="border-gray-300 hover:bg-gray-100">
          <Image
            src="/images/filter2.svg" // ArrowsUpDown
            alt="Sort Icon"
            width={20}
            height={20}
            className="text-gray-600"
          />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
