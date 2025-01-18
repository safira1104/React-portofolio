import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navlink } from "./data/dummydata";
import logo from "./data/image/logo.png";
import { Menu } from "@mui/icons-material";
   
export const Header = () => {
  const [responsive,setResponsive] = useState(false)
  return ( 
    <>
    <header >
     <div className="container flexsb">
          <div className="logo">
            <img src={logo} alt="" data-aos="zoom-in-right" />
          </div>
        <div className={responsive ? "hideMenu" : "nav"}>
          {navlink.map((link, i) => (
            <Link to={link.url} key={i} data-aos="zoom-in-left">
              {link.text}
            </Link>
          ))}
        </div>
        <button className="toggle" onClick={()=> setResponsive (!responsive)}>
          <Menu className="icon"></Menu>
        </button>
     </div>
    </header>
    </>
  );
};
