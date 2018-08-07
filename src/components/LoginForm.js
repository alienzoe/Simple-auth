import React from "react";

export default class LoginForm extends React.Component {
  resetDefault = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    firstNameError: "",
    lastNameError: "",
    userNameError: "",
    emailError: "",
    passwordError: ""
  };

  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    firstNameError: "",
    lastNameError: "",
    userNameError: "",
    emailError: "",
    passwordError: "",
    isLogin: this.props.isLogin !== undefined ? this.props.isLogin : null
  };

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleOnSubmit = e => {
    e.preventDefault();

    if (!this.handleValidate()) {
      this.setState(state => ({ ...state, ...this.resetDefault }));
    }
  };

  handleValidate = () => {
    let isError = false;
    const errors = {
      firstNameError: "",
      lastNameError: "",
      emailError: "",
      passwordError: ""
    };

    if (this.state.userName.length < 5) {
      isError = true;
      errors.userNameError = "Username needs to be atleast 5 characters long";
    }

    if (this.state.email.indexOf("@") === -1) {
      isError = true;
      errors.emailError = "Requires valid email";
    }

    this.setState(errors);

    return isError;
  };

  render() {
    return (
      <div
        style={{
          padding: "10px",
          border: "2px solid black",
          borderRadius: "5%",
          margin: "3rem",
          textAlign: "center"
        }}
      >
        {this.props.children(
          this.state,
          this.handleOnChange.bind(this),
          this.handleOnSubmit.bind(this)
        )}
      </div>
    );
  }
}
