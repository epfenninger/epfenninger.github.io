mport * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, animateScroll } from "react-scroll";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const buttonStyle = {
  color: "white",
  fontSize: "1.2vw",
  justify: "center",
  textAlign: "center",
  marginTop: "auto",
  marginBottom: "auto",
};

class NavBar extends React.Component {
  render() {
    return (
      <Box sx={{ flexGrow: 1 }} display="table">
        <AppBar color="transparent">
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              <div className="navbartext">
                <Stack direction="row" spacing={2}>
                  <Link activeClass="active" to="home" spy={true} smooth={true}>
                    <Button style={buttonStyle}>Home</Button>
                  </Link>
                  <Link to="tilegrid" spy={true} smooth={true} offset={-100}>
                    <Button style={buttonStyle}> Skills</Button>
                  </Link>
                  <Link
                    to="experience"
                    spy={true}
                    smooth={true}
                    offset={-600}
                    isDynamic={true}
                  >
                    <Button style={buttonStyle}>Experience</Button>
                  </Link>
                  <Link to="portfolio" spy={true} smooth={true}>
                    <Button style={buttonStyle}>Portfolio</Button>
                  </Link>
                  <Link to="contact" spy={true} smooth={true}>
                    <Button style={buttonStyle}>Contact Me</Button>
                  </Link>
                </Stack>
              </div>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}

export default NavBar;