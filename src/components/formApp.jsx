import * as React from "react";
import Typography from "@mui/material/Typography";
import BasicContact from "./BasicContact";
import Hubspot from "./Hubspot";
import NoID from "./NoID";
import ChangingFormID from "./ChangingFormID";

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "black",
  fontWeight: "bold",
  variant: "outlined",
};

class FormApp extends React.Component {
  render() {
    return (
      <div>
        <BasicContact />
        <ChangingFormID />
        <NoID />
        <Hubspot />
      </div>
    );
  }
}

export default FormApp;
