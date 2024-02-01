import React from "react";
import { Outlet } from "react-router-dom";
import Warning from "../components/Warning.jsx";
const AppLayout = () => {
  return (
    <div>
      {/* <div className="sticky top-0 z-10">
        <Warning />
      </div> */}

      <div>
        <h1>Nav Bar section</h1>
      </div>

      <div className="mt-4 mx-2 sm:mx-20 ">
        <Outlet />
      </div>
      {/* <div className=" w-full">
        <Warning />
      </div> */}
    </div>
  );
};

export default AppLayout;
