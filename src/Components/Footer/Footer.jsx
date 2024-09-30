import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" className="logo-img" />
          <p className="company-history">
            Founded in 2001, we embarked on a mission to bridge the gap
            between exceptional cuisine and busy lifestyles. With a vision to
            redefine convenience, we set out to create a platform that
            seamlessly connects food enthusiasts with their favorite restaurants
            and eateries. From our humble beginnings as a small startup, we have
            grown into a formidable presence in the food delivery industry.
            Through unwavering dedication and a commitment to excellence, we
            have expanded our reach to serve communities far and wide
          </p>
          <div className="social-media-icons">
            <img src={assets.facebook_icon} alt="" className="social-media" />
            <img src={assets.linkedin_icon} alt="" className="social-media" />
            <img src={assets.twitter_icon} alt="" className="social-media" />
          </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul className="company-links">
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>CONTACT US</h2>
            <ul className="contact-us-methods">
                <li>+1-221-345-1290</li>
                <li>supportus@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="copyright">Copyright © 2024. All rights reserved.</p>
    </div>
  );
};

export default Footer;
