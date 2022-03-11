import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ItemPage from "./ItemPage";
import Home from "./Home";
import Beers from "./Beers";
import Footer from "./Footer";

function App() {
  const API_URL = "https://api.punkapi.com/v2/";
  const [reqType, setReqType] = useState("beers");
  const [items, setItems] = useState([]);
  const logo = "https://www.brewdog.com/assets/images/logo.svg";

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        const data = await response.json();
        setItems(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchItems();
  }, [reqType]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home logo={logo} items={items} />} />
        <Route path="/beers" element={<Beers items={items} logo={logo} />} />
        <Route path="/beers/:id" element={<ItemPage items={items} />} />
      </Routes>
      <Footer logo={logo} />
    </Router>
  );
}

export default App;
