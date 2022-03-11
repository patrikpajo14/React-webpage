import React from "react";
import { Link } from "react-router-dom";

const Footer = ({ logo }) => {
  return (
    <footer>
      <Link to="/">
        <img className="logo" src={logo} />
      </Link>
      <h3>@2022 Brewdog</h3>
    </footer>
  );
};

export default Footer;
