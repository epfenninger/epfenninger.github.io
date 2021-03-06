import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { BrowserRouter, Link } from "react-router-dom";

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
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="transparent">
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/" style={linkStyle}>
                Home
              </Link>
              <Link to="/blockediframe" style={linkStyle}>
                Blocked Iframe Version
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}

export default NavBar;
