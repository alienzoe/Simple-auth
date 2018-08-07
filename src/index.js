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

const notFound = () => <h1>404 Page not Found</h1>;

const routes = [
  {
    path: "/login",
    component: Login
  },
  {
    path: "/register",
    component: Register
  }
];

const authen = () => {
  const exist = localStorage.getItem("data") && true;

  if (exist) {
    const { isLogin } = JSON.parse(localStorage.getItem("data"));
    return isLogin;
  }
};

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authen() ? (
        <Component {...props} {...JSON.parse(localStorage.getItem("data"))} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

class App extends React.Component {
  render() {
    localStorage.setItem("data", JSON.stringify({ isLogin: false, user: {} }));
    return (
      <div
        style={{
          width: "70%",
          margin: "0 auto"
        }}
      >
        <Switch>
          {routes.map((route, i) => (
            <Route exact {...route} key={i} />
          ))}
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
