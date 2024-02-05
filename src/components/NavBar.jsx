import React, { useCallback, useEffect, useRef, useState } from "react";
import GlobalSearch from "./search/GlobalSearch";
import { NavigationDataWeb } from "../utils/NavigationData";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import BeforeLoginMenu from "./menu/BeforeLoginMenu";
import OtherMenu from "./menu/OtherMenu";

const NavBar = () => {
  const [loginMenu, setLoginMenu] = useState(false);
  const [otherMenu, setOtherMenu] = useState(false);

  const otherMenuOpen = () => {
    setOtherMenu(true);
  };
  const otherMenuClose = () => {
    setOtherMenu(false);
  };

  const loginMenuOpen = () => {
    setLoginMenu(true);
  };
  const loginMenuClose = () => {
    setLoginMenu(false);
  };

  return (
    <div className="flex justify-between items-center">
      <div>logo </div>
      <div className="w-1/2">
        <GlobalSearch />
      </div>
      <div className="flex justify-between gap-4">
        {NavigationDataWeb.map((item, index) => {
          return (
            <div key={index}>
              {item.menuType === "Login" ? (
                <div>
                  <div
                    className="flex items-center justify-center hover:cursor-pointer hover:bg-blue-300 p-1 space-x-1 rounded-md relative"
                    onMouseEnter={loginMenuOpen}
                  >
                    <div className="h-8 w-8">{item.icon}</div>
                    <div>{item.label}</div>
                    <ArrowDownCircleIcon className="h-5 w-5" />
                  </div>
                  {loginMenu && (
                    <BeforeLoginMenu loginMenuClose={loginMenuClose} />
                  )}
                </div>
              ) : item.menuType === "Other" ? (
                <div>
                  <div
                    className="flex items-center justify-center hover:cursor-pointer hover:bg-blue-300 p-1 space-x-1 rounded-md relative"
                    onMouseEnter={otherMenuOpen}
                  >
                    <div className="h-8 w-8">{item.icon}</div>
                    <div>{item.label}</div>
                    <ArrowDownCircleIcon className="h-5 w-5" />
                  </div>
                  {otherMenu && <OtherMenu loginMenuClose={otherMenuClose} />}
                </div>
              ) : (
                <div className="flex items-center justify-center hover:cursor-pointer p-1">
                  <div className="h-8 w-8">{item.icon}</div>
                  <div>{item.label}</div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NavBar;
