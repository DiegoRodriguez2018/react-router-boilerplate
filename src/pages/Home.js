import React, { Component } from "react";
import NavBar from "../components/NavBar";

class MainPage extends Component {

  render() {
    return (
      <div className="main-page">
        <NavBar />
        <div className="container">
          <h1 className="page-header"> Home </h1>

        </div>
      </div>
    );
  }
}
export default MainPage;
