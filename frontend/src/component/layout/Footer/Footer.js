  import React from "react";
  import playstore from "../../../images/playstore.png";
  import appstore from "../../../images/Appstore.png";
  import "./Footer.css";

  const Footer = () => {
    return (
      <footer id="footer">
        <div className="leftFooter">
          <h4>DOWNLOAD OUR APP</h4>
          <p>Download App for Android and IOS mobile phone</p>
          <img src={playstore} alt="playstore" />
          <img src={appstore} alt="appstore" />
        </div>
        <div className="midFooter">
          <h1>ECOMMERCE.</h1>
          <p>High quality is our first priority</p>
          <p>Copyrights 2023 &copy; MeAadarshRaj</p>
        </div>
        <div className="rightFooter">
          <h4>Follow Us</h4>
          <a
            href="https://github.com/Aadarsh777"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100010301229960"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://www.linkedin.com/in/aadarsh-raj-3937a5219/"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </div>
      </footer>
    );
  };

  export default Footer;
