import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Header = ({ logo, image, text, buttonShow }) => {
  const buttonText = "See all beers";
  return (
    <header>
      <img className="background" src={image} />
      <div className="content">
        <Link to="/">
          <img className="logo" src={logo} />
        </Link>
        <div>
          <h2>{text}</h2>
          <Button
            buttonShow={buttonShow}
            buttonText={buttonText}
            link={"/beers"}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
