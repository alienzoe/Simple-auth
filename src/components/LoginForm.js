import React from "react";
import { withRouter } from "react-router-dom";
import { userList } from "../constants";

class LoginForm extends React.Component {
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
    message: "",
    authenType: this.props.authenType
  };

  mutation = () => {
    const user = userList.filter(
      list =>
        list.email === this.state.email && list.password === this.state.password
    );

    if (user.length > 0) {
      return {
        isLogin: true,
        data: user[0]
      };
    }

    return {
      isLogin: false,
      data: {}
    };
  };

  async handleOnSubmit(e) {
    e.preventDefault();

    if (!this.handleValidate()) {
      const { isLogin, data } = await this.mutation();

      if (isLogin) {
        localStorage.setItem("data", JSON.stringify({ isLogin, data }));
        this.props.history.push("/");
      } else {
        this.setState({
          message: "Incorrect email and password! Please try again!"
        });
      }
    }
  }

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleValidate = () => {
    let isError = false;
    const errors = {
      firstNameError: "",
      lastNameError: "",
      emailError: "",
      passwordError: ""
    };

    if (this.state.authenType === "register") {
      if (this.state.firstName.length <= 0) {
        isError = true;
        errors.firstNameError = "First Name is required!";
      }
      if (this.state.lastName.length <= 0) {
        isError = true;
        errors.lastNameError = "First Name is required!";
      }
    }

    if (this.state.email.indexOf("@") === -1) {
      isError = true;
      errors.emailError = "Invalid email";
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

export default withRouter(LoginForm);
