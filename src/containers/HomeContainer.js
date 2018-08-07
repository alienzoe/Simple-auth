import React from "react";
import { withStyles } from "@material-ui/core/styles";
import RaisedButton from "material-ui/RaisedButton";

const HomeComponent = props => (
  <div className={props.classes.container}>
    <h1>Hello! {}</h1>
    <br />
    <div>{}</div>
    <br />
    <RaisedButton primary label="Log-out" />
  </div>
);

export default withStyles({
  container: {
    display: "flex",
    flexFlow: "nowrap column",
    alignItems: "center"
  }
})(HomeComponent);
