import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./login.css";

class Registration extends React.Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
    confirm_password: "",
    remember: false,
    errors: [],
  };

  componentDidMount() {
    this.userData = JSON.parse(localStorage.getItem("registrationdata"));
    if (this.userData) {
      this.setState({
        firstname: this.userData.firstname,
        lastname: this.userData.lastname,
        email: this.userData.email,
        username: this.userData.username,
        password: this.userData.password,
      });
    }
  }

  //On change event

  handleOnchange = (event) => {
    const input = event.target;
    // console.log(input);
    // const value = input.value === "checkbox" ? input.checked : input.value;
    // this.setState({ submitted: true });
    const value = input.type === "checkbox" ? input.checked : input.value;
    // console.log(value);

    this.setState({ [input.name]: value });
  };
  // withRouter for redirect page
  redirectToRegistered = () => {
    const { history } = this.props;
    if (history) history.push("/registered");
  };

  //form validation handle
  handleValidation = () => {
    const { firstname, lastname, password, email, username, confirm_password } =
      this.state;
    let formIsValid = true;
    let errors = {};
    //firstname
    if (!firstname) {
      formIsValid = false;
      errors["firstname"] = "*Please input firstname.";
    }
    if (typeof firstname !== "undefined") {
      if (!firstname.match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["firstname"] = "Please input only characters";
      }
    }
    // lastname
    if (!lastname) {
      formIsValid = false;
      errors["lastname"] = "*Please input lastname.";
    }
    if (typeof lastname !== "undefined") {
      if (!lastname.match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["lastname"] = "Please input only characters";
      }
    }
    //email
    if (!email) {
      formIsValid = false;
      errors["email"] = "*Please input your Email.";
    }
    if (typeof email !== "undefined") {
      let lastAtPos = email.lastIndexOf("@");
      let lastDotPos = email.lastIndexOf(".");
      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          email.indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          email.length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "*Email is not valid";
      }
    }
    //password
    if (!password) {
      formIsValid = false;
      errors["password"] = "*Please Enter password.";
    }
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
    //confirm password
    if (!confirm_password) {
      formIsValid = false;
      errors["confirm_password"] = "*Please input password";
    }
    if (typeof confirm_password !== "undefined") {
      if (password !== confirm_password) {
        formIsValid = false;
        errors["confirm_password"] = "*Password do not match.";
      }
    }

    //username
    if (username === "") {
      formIsValid = false;
      errors["username"] = "*Can not be empty";
    }
    if (typeof username !== "undefined") {
      if (!username.match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["username"] = "*Please input only characters";
      }
    }

    this.setState({ errors: errors });
    return formIsValid;
  };

  //form submit handler
  handleRegister = (e) => {
    e.preventDefault();
    const { remember } = this.state;
    // console.log(remember);
    // console.log(this.state);
    if (remember) {
      if (this.handleValidation()) {
        alert("Form is submitted");
        this.redirectToRegistered();
        localStorage.setItem("registrationdata", JSON.stringify(this.state));
      } else {
        alert("Form has error.");
      }
    }
  };

  render() {
    const {
      firstname,
      lastname,
      username,
      password,
      email,
      remember,
      confirm_password,
    } = this.state;

    return (
      <div className="login-form">
        <span>
          <h1>User Registration</h1>
        </span>
        <form onSubmit={this.handleRegister}>
          <div style={{ marginTop: "8px" }}>
            <label>
              First name:
              <input
                type="text"
                name="firstname"
                defaultValue={firstname}
                id="firstname"
                placeholder="Enter first name"
                onChange={this.handleOnchange}
              />
            </label>
          </div>
          <br />
          <span style={{ color: "red" }}>{this.state.errors["firstname"]}</span>
          <br />
          <div style={{ marginTop: "8px" }}>
            <label>
              Last name:
              <input
                type="text"
                name="lastname"
                defaultValue={lastname}
                id="lastname"
                placeholder="Enter last name"
                onChange={this.handleOnchange}
              />
            </label>
          </div>
          <br />
          <span style={{ color: "red" }}>{this.state.errors["lastname"]}</span>
          <br />
          <div>
            <label>
              Username:
              <input
                type="text"
                name="username"
                defaultalue={username}
                id="username"
                placeholder="Enter user name"
                onChange={this.handleOnchange}
              />
            </label>
          </div>
          <br />
          <span style={{ color: "red" }}>{this.state.errors["username"]}</span>
          <br />
          <div>
            <label>
              Email:
              <input
                type="text"
                name="email"
                defaultValue={email}
                id="email"
                placeholder="Enter email"
                onChange={this.handleOnchange}
              />
            </label>
          </div>
          <br />
          <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
          <br />
          <div>
            <label>
              Password:
              <input
                type="password"
                name="password"
                defaultValue={password}
                id="password"
                placeholder="Enter password"
                onChange={this.handleOnchange}
              />
            </label>
          </div>
          <br />
          <span style={{ color: "red" }}>{this.state.errors["password"]}</span>
          <br />
          <div>
            <label>
              Confirm_Password:
              <input
                type="password"
                name="confirm_password"
                defaultValue={confirm_password}
                id="confirm_password"
                placeholder="Enter password"
                onChange={this.handleOnchange}
              />
            </label>
          </div>
          <br />
          <span style={{ color: "red" }}>
            {this.state.errors["confirm_password"]}
          </span>
          <br />
          <div>
            <label>
              <input
                type="checkbox"
                checked={remember}
                onChange={this.handleOnchange}
                name="remember"
                id="remember"
                required
              />
              I agree terms and condition
            </label>
          </div>
          <button type="submit" style={{ marginTop: "8px" }}>
            Register
          </button>
          <div>
            <Link to="/" style={{ marginTop: "8px" }}>
              Log in
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Registration);
