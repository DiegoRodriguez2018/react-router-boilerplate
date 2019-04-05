import React, { Component } from "react";
import NavBar from "../components/NavBar";

class UserDashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="main-page">
          <NavBar />
          <div className="container">
            <h1 className="page-header"> Dashboard </h1>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default UserDashboard;
