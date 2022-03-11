import React, { useState } from "react";
import Header from "./Header";
import ItemsList from "./ItemsList";
import Button from "./Button";

const Beers = ({ items, logo }) => {
  const image =
    "https://www.brewdog.com/images/cms/blog/1445371565Beers2016_1.LEAD.jpg";
  const buttonText = "Back to Homepage";

  return (
    <main>
      <Header
        logo={logo}
        image={image}
        text={"BEST CRAFT BEERS"}
        buttonShow={"none"}
      />
      <article className="beers-article">
        <Button
          buttonText={buttonText}
          link={"/job-application/"}
          buttonShow={""}
        />
        <p>Results: 25</p>
      </article>
      <ItemsList items={items} />;
    </main>
  );
};

export default Beers;
