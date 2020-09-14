import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isOpen }) => (
  <nav className={!isOpen ? "navbar" : "menu"}>
    <ul>
      <li>
        <Link to="/superpowers">
          Superpowers
          <summary>Things I can do</summary>
        </Link>
      </li>
      <li>
        <Link to="/timeline">
          Timeline
          <summary>History of my tech career</summary>
        </Link>
      </li>
      <li>
        <Link to="/education">
          Education
          <summary>Things I'm learning and teaching</summary>
        </Link>
      </li>
      <li>
        <Link to="/what-next">
          What next?
          <summary>What I want to achieve</summary>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
