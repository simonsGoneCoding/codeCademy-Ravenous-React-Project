import React, { Component } from "react";
import "./BusinessList.css";
import Business from "./../Business/Business.js";

class BusinessList extends Component {
  render() {
    return (
      <div className="BusinessList">
        {this.props.buisnesses.map((business) => {
          return <Business business={business} />;
        })}
      </div>
    );
  }
}

export default BusinessList;
