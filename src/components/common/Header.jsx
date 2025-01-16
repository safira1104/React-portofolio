import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navlink } from "./data/dummydata";
import logo from "./data/image/logo.png";
import { Menu } from "@mui/icons-material";
   
export const Header = () => {
  const [Responsive,setResponsive] = useState(false)
  return ( 
    <header >
     <div className="container flexsb">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
        <div className={Responsive ? "hideMenu" : "nav"}>
          {navlink.map((link, i) => (
            <Link to={link.url} key={i}>
              {link.text}
            </Link>
          ))}
        </div>
        <button className="toggle" onClick={()=> setResponsive (!responsive)}>
          <Menu className="icon"></Menu>
        </button>
     </div>
    </header>
  );
};
