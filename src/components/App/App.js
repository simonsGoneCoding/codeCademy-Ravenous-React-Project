import React from "react";
import BusinessList from "./../BusinessList/BusinessList";
import SearchBar from "./../SearchBar/SearchBar";
import "./App.css";

const business = {
  imageSrc:
    "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
  name: "MarginOtto Pizzeria",
  address: "1010 Paddington Way",
  city: "Flavortown",
  state: "NY",
  zipCode: "10101",
  category: "Italian",
  rating: 4.5,
  reviewCount: 90,
};

const buisnessesList = [
  business,
  business,
  business,
  business,
  business,
  business,
];

function App() {
  return (
    <div className="App">
      <SearchBar />
      <BusinessList buisnessesList={buisnessesList} />
    </div>
  );
}

export default App;
