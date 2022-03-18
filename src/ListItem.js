import { React } from "react";
import { Link } from "react-router-dom";

const ListItem = ({ item }) => {
  const linkStyle = {
    textDecoration: "none",
    color: "gray",
  };

  return (
    <article className="item">
      <div className="img-container">
        <img src={item.image_url} alt={item.name} />
      </div>
      <div>
        <h3>{item.name}</h3>
        <p>{item.tagline}</p>
        <Link to={`/React-webpage/beers/${item.id}`} style={linkStyle}>
          <p>Show details</p>
        </Link>
      </div>
    </article>
  );
};

export default ListItem;
