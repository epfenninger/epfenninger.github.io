import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
const defaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

const REACT_APP_HA_WEBHOOK = process.env.REACT_APP_HA_WEBHOOK;

const Contact = () => {
  const [formValues, setFormValues] = useState(defaultValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    handleClickOpen();

    fetch(REACT_APP_HA_WEBHOOK, {
      method: "POST",
      body: JSON.stringify({
        name: formValues.name,
        email: formValues.email,
        message: formValues.message,
      }),
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  const [open, setOpen] = React.useState(false);

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        alignItems="center"
        justify="center"
        direction="column"
        rowSpacing={5}
        position="relative"
      >
        <Grid item>
          <TextField
            id="business-email"
            name="business-email"
            label="Email"
            type="email"
            value={formValues.email}
            onChange={handleInputChange}
            required
          />
        </Grid>
        <Grid item>
          <TextField
            id="First-Name"
            name="First-Name"
            label="First Name"
            type="text"
            value={formValues.firstName}
            onChange={handleInputChange}
            required
          />
        </Grid>
        <Grid item>
          <TextField
            id="Last-Name"
            name="Last-Name"
            label="Last Name"
            type="text"
            value={formValues.lastName}
            onChange={handleInputChange}
            required
          />
        </Grid>
        <Grid item>
          <TextField
            id="message-input"
            name="message"
            label="Message"
            type="text"
            value={formValues.message}
            onChange={handleInputChange}
            required
          />
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Thanks for reaching out. I'll be in touch soon."}
            </DialogTitle>
            <DialogActions>
              <Button onClick={handleClose} autoFocus>
                Cool!
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>
      </Grid>
    </form>
  );
};
export default Contact;
