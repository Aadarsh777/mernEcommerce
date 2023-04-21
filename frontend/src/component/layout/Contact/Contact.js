import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:aadarshraj12345678@gmail.com">
        <Button>Contact: aadarshraj12345678@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;