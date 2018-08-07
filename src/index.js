import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from "./containers/HomeContainer";
import Login from "./containers/LoginContainer";
import Register from "./containers/RegisterContainer";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const authen = () => {
  const exist = localStorage.getItem("data") && true;

  if (exist) {
    const { isLogin } = JSON.parse(localStorage.getItem("data"));
    return isLogin;
  }
};

const AuthRoute = ({ component: WrappedHome, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authen() ? (
        <WrappedHome {...props} {...JSON.parse(localStorage.getItem("data"))} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

const LoginRoute = ({ component: WrappedLogin, ...rest }) => (
  <Route
    {...rest}
    render={() => (authen() ? <Redirect to="/" /> : <WrappedLogin />)}
  />
);

class App extends React.Component {
  render() {
    // localStorage.setItem("data", JSON.stringify({ isLogin: false, user: {} }));
    return (
      <div
        style={{
          width: "70%",
          margin: "0 auto"
        }}
      >
        <Switch>
          <Route exact path="/register" component={Register} />
          <LoginRoute exact path="/login" component={Login} />
          <AuthRoute exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

ReactDOM.render(
  <MuiThemeProvider>
    <Router>
      <App />
    </Router>
  </MuiThemeProvider>,
  document.getElementById("root")
);
registerServiceWorker();
