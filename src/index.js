import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/HomeContainer";
import Login from "./containers/LoginContainer";
import Register from "./containers/RegisterContainer";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const notFound = () => <h1>404 Page not Found</h1>;

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/auth",
    component: Login
  },
  {
    path: "/register",
    component: Register
  },
  {
    component: notFound
  }
];
class App extends React.Component {
  render() {
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
