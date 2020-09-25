import React, { useState } from "react";
import { Link } from "react-router-dom";
import portrait from "../assets/anneka.png";
import twitter from "../assets/twitter_logo.svg";
import linkedin from "../assets/linkedin_logo.svg";
import email from "../assets/envelope.svg";
import github from "../assets/github_logo.svg";
import Navbar from "./Navbar";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navigation">
      <Link to="/" className="nav-home nav-item">
        <img className="portrait" src={portrait} alt="Portrait of Anneka" />
        <div className="greeting">Hi, I'm Anneka</div>
        <summary>Return to the homepage</summary>
      </Link>
      <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
        Menu
      </button>
      <Navbar isOpen={isOpen} />
      <p className="cv nav-item">
        View my CV 
        <a href="https://docs.google.com/document/d/1htolYi06hWQchRumEet-wTy0_2TzbvHWcnZ1ZEm22zE/edit?usp=sharing">
          here
        </a>
      </p>
      <ul className="contact-icons nav-item">
        <li>
          <a href="http://www.twitter.com/annekasillitoe">
            <img src={twitter} className="icon" alt="Twitter icon link" />
          </a>
        </li>
        <li>
          <a
            href="mailto:annekasillitoe@gmail.com?summaryject=Hello"
            target="_top"
          >
            <img src={email} className="icon" alt="Email icon link" />
          </a>
        </li>
        <li>
          <a href="http://www.linkedin.com/in/annekasillitoe">
            <img src={linkedin} className="icon" alt="LinkedIn icon link" />
          </a>
        </li>
        <li>
          <a href="http://www.github.com/annekasillitoe">
            <img src={github} className="icon" alt="Github icon link" />
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Navigation;
