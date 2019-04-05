import React, { Component } from "react";
import history from '../history';

export default class NavBar extends Component {
  redirect = (e) => {
    const path = e.target.id;
    history.push(path);
  }

  render() {
    return (
      <div className="c-navbar">
        <nav>
          <div id="/home" onClick={this.redirect} className="navbar-button">Home</div>
          <div id="/dashboard" onClick={this.redirect} className="navbar-button">Dashboard</div>
        </nav>
      </div>
    );
  }
}
