import React, { Component } from "react";
import "./SearchBar.css";

// API spec search
const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

class SearchBar extends Component {
  renderSortByOptions() {
    return Object.keys(sortByOptions).map((option) => {
      let sortingValue = sortByOptions[option];
      return (
        <li key={sortingValue}>{option}</li> // key = best_match || ratng || review_count  && option = Best Match || Highest Rated etc.
      );
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>{this.renderSortByOptions()}</ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a href="#">Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
