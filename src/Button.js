import React from "react";
import { Link } from "react-router-dom";

const Button = ({ buttonText, link, buttonShow }) => {
  return (
    <Link to={link}>
      <button style={{ display: `${buttonShow}` }} className="btn">
        {buttonText}
      </button>
    </Link>
  );
};

export default Button;
