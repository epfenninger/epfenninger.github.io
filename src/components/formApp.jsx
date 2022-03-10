import * as React from "react";
import Typography from "@mui/material/Typography";
import BasicContact from "./BasicContact";
import hubspot from ":/hubspot";

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "black",
  fontWeight: "bold",
  variant: "outlined",
};

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <BasicContact />
        <hubspot />
      </div>
    );
  }
}

export default NavBar;
