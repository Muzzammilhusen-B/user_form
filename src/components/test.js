import React, { Component } from "react";
import "./login.css";
import { Link, withRouter } from "react-router-dom";

class Login extends Component {
  state = {
    username: "",
    password: "",
    remember: false,
    errors: {
      username: "",
      password: "",
    },
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
    // event.preventDefault();
    // console.log(event.target.value);
    const { name, value } = event.target;
    const checkbox = event.target.checked;
    console.log(checkbox);

    const isChecked = checkbox ? true : "";
    let errors = this.state.errors;
    switch (name) {
      case "username":
        errors.username = !value.match(
          /^(?=[a-zA-Z]{5,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/
        )
          ? "Username must be at least 5 characters long and without special character!"
          : "";
        break;
      case "password":
        errors.password = !value.match(
          "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,10}$"
        )
          ? "*Password should contain one smallcase, uppercase, symbol & number each and between 6-10 length"
          : "";
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value, remember: isChecked });
  };

  //withRouter history for redirect the page
  redirectLoginHome = () => {
    const { history } = this.props;
    if (history) history.push("/loginhome");
  };

  //form(fields) validation
  handleValidation = () => {
    let formIsValid = true;

    return formIsValid;
  };

  //form submit handler
  handleSubmit = (e) => {
    e.preventDefault();
    const { remember } = this.state;
    // console.log(remember);
    // console.log(this.state);

    if (remember && this.handleValidation(this.state.errors)) {
      console.log("Form submitted with stored data", this.state);
      this.redirectLoginHome();
      localStorage.setItem("logindata", JSON.stringify(this.state));
    } else if (this.handleValidation(this.state.errors)) {
      console.log("Form submitted without stored data", this.state);
      this.redirectLoginHome();
    } else if (!this.handleValidation()) {
      console.error("Form has error");
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
          <label>
            <input
              type="checkbox"
              width={"100%"}
              id="remember"
              name="remember"
              defaultChecked={this.state.remember}
              onChange={this.handleChange}
              style={{ marginTop: "10px" }}
            />
            {""} Remember Me
          </label>
          <Link className="login-form-forgot" to="/forgotpwd">
            Forgot passwod
          </Link>
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
