import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import { Facebook, GitHub } from "@material-ui/icons";
const About = () => {
  const visitFacebook = () => {
    window.location = "https://www.facebook.com/profile.php?id=100010301229960";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dmvpg1bu3/image/upload/v1676214614/avatars/jns1b3m3ibabtrzdixhr.jpg"
              alt="Founder"
            />
            <Typography>Aadarsh Raj</Typography>
            <Button onClick={visitFacebook} color="primary">
              Visit Facebook
            </Button>
            <span>
              This is a sample wesbite made by @meaadarshraj. Only with the
              purpose to learn MERN Stack
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://github.com/Aadarsh777"
              target="blank"
            >
              <GitHub className="youtubeSvgIcon" />
            </a>

            <a href="https://www.facebook.com/profile.php?id=100010301229960" target="blank">
              <Facebook className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;