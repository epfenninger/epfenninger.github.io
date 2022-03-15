import * as React from "react";

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

class Hubspot extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <p style={{ color: "black" }}>
          HubSpot iFrame Form (with some fun picklists)
        </p>
        <div id="hubspotForm"></div>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default Hubspot;
