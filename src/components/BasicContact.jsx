import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

const defaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  companyName: "",
  jobTitle: "",
  phoneNumber: "",
  message: "",
};

const BasicContact = () => {
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

  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "https://js.hsforms.net/forms/v2.js";
  document.body.appendChild(script);

  script.addEventListener("load", () => {
    if (window.hbspt) {
      window.hbspt.forms.create({
        portalId: "21341458",
        formId: "8134d08c-1ff6-4e0c-b50c-31093bc9ef18",
        target: "#hubspotForm",
      });
    }
  });

  return (
    <div>
      <form onSubmit={handleSubmit} id="myForm">
        <p style={{ color: "black" }}>Basic Form</p>
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
      <div>
        <div id="hubspotForm"></div>
      </div>
    </div>
  );
};
export default BasicContact;
