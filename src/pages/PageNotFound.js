import React, { Component } from "react";
import NavBar from "../components/NavBar";

class PageNotFound extends Component {
  render() {
    return (
      <div className="page-not-found">
        <NavBar />

        <div className="container">
          <h1>Page not found</h1>
          <h2>Sorry it seems that resource is missing!</h2>
        </div>
      </div>
    );
  }
}

export default PageNotFound;
