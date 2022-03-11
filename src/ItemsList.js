import React from "react";
import ListItem from "./ListItem";

const ItemsList = ({ items }) => {
  return (
    <section className="items">
      {items.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </section>
  );
};

export default ItemsList;
