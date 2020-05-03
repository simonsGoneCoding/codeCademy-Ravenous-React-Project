import React from "react";
import BusinessList from "./../BusinessList/BusinessList";
import SearchBar from "./../SearchBar/SearchBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;
