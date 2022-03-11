import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ItemPage = ({ items }) => {
  let { id } = useParams();
  const item = items.find((item) => item.id.toString() === id);
  const linkStyle = {
    textDecoration: "none",
    color: "gray",
  };
  console.log(items);

  return (
    <main>
      <header className="item-page-header">
        <Link to="/">
          <img
            className="logo"
            src="https://www.brewdog.com/assets/images/logo.svg"
            alt="logo"
          />
        </Link>
      </header>
      <article className="page-item">
        <div className="img-container">
          <img src={item.image_url} alt={item.name} />
        </div>
        <div className="item-content">
          <h3>{item.name}</h3>
          <p>{item.tagline}</p>
          <p>First brewed: {item.first_brewed}</p>
          <p>
            Description: <br /> {item.description}
          </p>
          <p>
            Brewers tip: <br />
            {item.brewers_tips}
          </p>
          <Link to={`/beers`} style={linkStyle}>
            Back
          </Link>
        </div>
      </article>
    </main>
  );
};

export default ItemPage;
