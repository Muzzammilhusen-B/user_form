import React, { Component } from "react";
import "./login.css";
import { Link, withRouter } from "react-router-dom";

class Login extends Component {
  state = {
    username: "",
    password: "",
    remember: false,
    errors: [],
  };
  // component life cycle after mount
  componentDidMount() {
    this.informtionData = JSON.parse(localStorage.getItem("logindata"));
    // console.log(this.informtionData);
    if (this.informtionData) {
      this.setState({
        username: this.informtionData.username,
        password: this.informtionData.password,
        remember: this.informtionData.remember,
      });
    } else {
      this.setState({
        username: "",
        password: "",
        remember: "",
      });
    }
  }

  //on change event handler
  handleChange = (event) => {
    event.preventDefault();
    // console.log(event.target.value);
    const input = event.target;
    // console.log(event.target.value);

    const value = input.type === "checkbox" ? input.checked : input.value;
    console.log(value);

    this.setState({ [input.name]: value });
  };

  //withRouter history for redirect the page
  redirectLoginHome = () => {
    const { history } = this.props;
    if (history) history.push("/loginhome");
  };

  //form(fields) validation
  handleValidation = () => {
    const { username, password } = this.state;
    let formIsValid = true;
    let errors = {};

    //username
    if (!username) {
      formIsValid = false;
      errors["username"] = "*Please input username.";
    }
    if (typeof username !== "undefined") {
      if (!username.match(/^(?=[a-zA-Z]{5,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/)) {
        formIsValid = false;
        errors["username"] = "Please input only minimum 5 characters ";
      }
    }
    //password
    if (typeof password !== "undefined") {
      if (
        !password.match(
          "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,10}$"
        )
      ) {
        formIsValid = false;
        errors["password"] =
          "*Password should contain one smallcase, uppercase, symbol & number each and between 6-10 length";
      }
    }

    this.setState({ errors: errors });
    return formIsValid;
  };

  //form submit handler
  handleSubmit = (e) => {
    e.preventDefault();
    const { remember } = this.state;
    // console.log(remember);
    // console.log(this.state);

    if (remember && this.handleValidation()) {
      alert("Form submitted");
      this.redirectLoginHome();
      localStorage.setItem("logindata", JSON.stringify(this.state));
    } else if (this.handleValidation()) {
      alert("Form submitted");
      this.redirectLoginHome();
    } else if (!this.handleValidation()) {
      alert("Form has error");
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <div>
        <form className="login-form" onSubmit={this.handleSubmit}>
          <h1 style={{ color: "blue" }}>Login Form</h1>
          <label>
            Username :{""}
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              placeholder="Username"
              style={{ marginLeft: "8px" }}
              required
            />
          </label>
          <br />
          <span style={{ color: "red" }}>{errors["username"]}</span>
          <br />
          <label>
            Password : {""}
            <input
              type="password"
              width={"100%"}
              value={this.state.password}
              name="password"
              onChange={this.handleChange}
              placeholder="Password"
              style={{ marginTop: "10px", marginLeft: "8px" }}
              required
            />
          </label>
          <br />
          <span style={{ color: "red" }}>{errors["password"]}</span>
          <br />
          <label htmlFor="remember">
            {""} Remember Me:
            <input
              type="checkbox"
              width={"100%"}
              name="remember"
              checked={this.state.remember}
              onChange={this.handleChange}
              style={{ marginTop: "10px" }}
            />
            <Link className="login-form-forgot" to="/forgotpwd">
              Forgot passwod
            </Link>
          </label>
          <button
            className="login-form-button"
            type="submit"
            style={{
              color: "white",
              backgroundColor: "blue",
              marginRight: "8px",
              marginTop: "10px",
            }}
          >
            Log in
          </button>
          or <Link to="/registration">Register Now</Link>
        </form>
      </div>
    );
  }
}

export default withRouter(Login);
