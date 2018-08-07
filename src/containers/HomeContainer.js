import React from "react";
import { withStyles } from "@material-ui/core/styles";
import RaisedButton from "material-ui/RaisedButton";

const HomeComponent = ({ classes }) => (
  <div className={classes.container}>
    <h1>`Hello you are in, ${}`</h1>
    <br />
    <RaisedButton primary onClick={this.handleOnClick} label="Log-out" />
  </div>
);

export default withStyles({
  container: {
    display: "flex",
    flexFlow: "nowrap column",
    alignItems: "center"
  }
})(HomeComponent);
