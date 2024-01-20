// import React from 'react'

// import "./navbar.scss";
import { useEffect, useState } from "react";
import "./navStyle.scss";
import BigNav from "./BigNav";
import SmallNav from "./smallNav";

const NavBar = () => {
  let [resizeTheWidth, setResizeTheWidth] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      window.innerWidth >= 960 ? setResizeTheWidth(true) : setResizeTheWidth(false);
    });
    return () => window.removeEventListener("resize", () => console.log("removed"));
  }, [resizeTheWidth]);

  return <div className="nav">{window.innerWidth >= 960 ? <BigNav /> : <SmallNav />}</div>;
};

export default NavBar;
