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

class formApp extends Component {
  state = {};
  render() {
    return (
      <div>
        <div id="hubspotForm"></div>
      </div>
    );
  }
}

export default formApp;
