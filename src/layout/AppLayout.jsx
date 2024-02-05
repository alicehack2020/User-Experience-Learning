import React from "react";
import { Outlet } from "react-router-dom";
import Warning from "../components/Warning.jsx";
import NavBar from "../components/NavBar.jsx";

const AppLayout = () => {
  return (
    <div>
      {/* <div className="sticky top-0 z-10">
        <Warning />
      </div> */}

      <div className="mx-10 mt-4">
        <NavBar />
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
