import React from "react";
import { Link } from "react-router-dom";
import { ShoppingOutlined } from "@ant-design/icons";
import "./Header.css";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <>
      <div
        className="header"
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div></div>
        <Link to="/">
          <img
            src="https://content.thewosgroup.com/wosus/logo/wos_since_1924_uk_blk_notag.svg"
            alt=""
            width="200px"
          />
        </Link>
        <Link to="/cart">
          <ShoppingOutlined
            style={{
              fontSize: "30px",
              color: "black",
            }}
          />
        </Link>
      </div>
      <NavBar />
    </>
  );
};

export default Header;
