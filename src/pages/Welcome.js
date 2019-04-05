import React, { Component } from "react";
import history from '../history';

class Welcome extends Component {

  redirect = () =>{
    history.push('/home')
  }
  render() {
    return (
      <React.Fragment>
        <div className="welcome-page">
          <div className="container">
            <div className="welcome-message">Welcome User.Name</div>
            <div onClick={this.redirect} className="welcome-page-button">
              Start
            </div>
          
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Welcome;
