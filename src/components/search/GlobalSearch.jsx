import {
  ArrowPathRoundedSquareIcon,
  DevicePhoneMobileIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect, useRef, useState } from "react";

const GlobalSearch = () => {
  const [searchMenuOpen, setSearchMenuOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const inputRef = useRef();

  const searchOpen = () => {
    setSearchMenuOpen(true);
  };
  const searchClose = () => {
    setSearchMenuOpen(false);
  };

  const inputValueHanddler = (search) => {
    setInputValue(search);
  };

  const sampledata = [
    "motorola",
    "Vivo",
    "redmin",
    "poco",
    "Sunsung",
    "motorola 5g",
  ];

  useEffect(() => {
    let handleClick = (e) => {
      if (e.target !== inputRef.current) {
        searchClose();
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.addEventListener("click", handleClick);
    };
  });

  return (
    <div className="relative">
      <div
        className="border border-gray-400 rounded-md p-2 flex items-center space-x-1"
        onClick={searchOpen}
      >
        <MagnifyingGlassIcon className="h-6 w-6" />
        <input
          type="text"
          name=""
          id=""
          placeholder="Search for Products, Brands and More"
          className="w-full outline-none"
          ref={inputRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>

      {searchMenuOpen && (
        <div className="p-2 border border-gray-100 absolute w-full ">
          <div className="space-y-2  cursor-pointer ">
            {sampledata.map((name) => (
              <div
                className="flex space-x-2 hover:bg-slate-50 p-1"
                onClick={() => inputValueHanddler(name)}
              >
                <ArrowPathRoundedSquareIcon className="h-6 w-6" />
                <h5>{name}</h5>
              </div>
            ))}
          </div>
          <div>
            <h1>Discover More</h1>
            <div className="space-y-2">
              {sampledata.sort().map((name) => (
                <div
                  className="flex space-x-2 hover:bg-slate-50 p-1 cursor-pointer"
                  onClick={() => inputValueHanddler(name)}
                >
                  <DevicePhoneMobileIcon className="h-6 w-6" />
                  <h5>{name}</h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GlobalSearch;
