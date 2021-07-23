import React from "react";
import { Link } from "react-router-dom";

class LoginHome extends React.Component {
  render() {
    return (
      <div>
        Welcome, You are logged in!
        <div style={{ textAlign: "right" }}>
          <Link to="/">Log out</Link>
        </div>
      </div>
    );
  }
}

export default LoginHome;
