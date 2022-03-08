import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Helmet } from "react-helmet";

const defaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  companyName: "",
  jobTitle: "",
  phoneNumber: "",
  message: "",
};

const HiddenFields = () => {
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
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setFormValues({ defaultValues });
    document.getElementById("myForm").reset();
  };

  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Helmet>
        <meta http-equiv="X-Frame-Options" content="deny"></meta>
      </Helmet>
      <p style={{ color: "black" }}>iFrame Blocked from Loading</p>
      <form onSubmit={handleSubmit} id="myForm">
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
              name="email"
              label="Work Email"
              type="email"
              value={formValues.email}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item>
            <TextField
              id="First-Name"
              name="firstName"
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
              name="lastName"
              label="Last Name"
              type="text"
              value={formValues.lastName}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item>
            <TextField
              id="Company-Name"
              name="companyName"
              label="Company Name"
              type="text"
              value={formValues.companyName}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item>
            <TextField
              id="Job-Title"
              name="jobTitle"
              label="Job Title"
              type="text"
              value={formValues.jobTitle}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item>
            <TextField
              id="Phone-Number"
              name="phoneNumber"
              label="Phone Number"
              type="phone"
              value={formValues.phoneNumber}
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
                {"Submitted Content"}
              </DialogTitle>
              <DialogContent>
                {formValues.email}
                <br></br>
                {formValues.firstName}
                <br></br>
                {formValues.lastName}
                <br></br>
                {formValues.companyName}
                <br></br>
                {formValues.jobTitle}
                <br></br>
                {formValues.phoneNumber}
                <br></br>
                {formValues.message}
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} autoFocus>
                  Close
                </Button>
              </DialogActions>
            </Dialog>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};
export default HiddenFields;
