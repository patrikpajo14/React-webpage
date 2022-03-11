import React from "react";
import Header from "./Header";
import ItemsList from "./ItemsList";

const Home = ({ logo, items }) => {
  const image =
    "//images.ctfassets.net/ezd6as8gi91c/3eE5ngGAD7HyVVqEduR7fF/7e6ad7b9de9dcd4f7767760fe6960fab/DIY_Dog.jpg?fm=webp";
  const text = "GOOD PEOPLE\nDRINK GOOD BEER";
  const shortList = items.slice(11, 15);
  return (
    <main>
      <Header logo={logo} image={image} text={text} buttonShow={""} />
      <article className="title">
        <h3>The most popular beers</h3>
      </article>
      <ItemsList items={shortList} />
    </main>
  );
};

export default Home;
