import React, { forwardRef } from "react";
import { NavigationDataWeb } from "../../utils/NavigationData";

const BeforeLoginMenu = ({ loginMenuClose }) => {
  return (
    
    <div
      className="flex flex-col items-start gap-4 border border-gray-400 rounded-md p-2 w-52 justify-start absolute top-14"
      onMouseLeave={loginMenuClose}
    >
      {NavigationDataWeb.map((item, index) => (
        <div
          className="flex items-center justify-start hover:bg-slate-100 w-full hover:cursor-pointer p-1"
          onClick={loginMenuClose}
          key={index}
        >
          <div className="h-8 w-8">{item.icon}</div>
          <div>{item.label}</div>
        </div>
      ))}
    </div>
  );
};

export default BeforeLoginMenu;
