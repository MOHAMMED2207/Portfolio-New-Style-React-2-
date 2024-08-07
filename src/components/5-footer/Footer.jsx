/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useEffect, useState } from "react";
import "./footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  const storedActiveLink = localStorage.getItem("activeLink") || "home";
  const [activeLink, setActiveLink] = useState(storedActiveLink);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    localStorage.setItem("activeLink", activeLink);
  }, [activeLink]);

  return (
    <footer className="flex">
      <ul className="flex">
        <li>
          <Link
            onClick={() => handleLinkClick("About")}
            className={activeLink === "About" ? "active" : ""}
            href="./About"
          >
            About
          </Link>
        </li>

        <li>
          <Link
            onClick={() => handleLinkClick("Articles")}
            className={activeLink === "Articles" ? "active" : ""}
            href=""
          >
            Articles
          </Link>
        </li>
        <li>
          <Link
            onClick={() => handleLinkClick("Projects")}
            className={activeLink === "Projects" ? "active" : ""}
            href="#Projects"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            onClick={() => handleLinkClick("Speaking")}
            className={activeLink === "Speaking" ? "active" : ""}
            href=""
          >
            Speaking
          </Link>
        </li>
        <li>
          <Link
            onClick={() => handleLinkClick("uses")}
            className={activeLink === "uses" ? "active" : ""}
            href="./uses"
          >
            Uses
          </Link>
        </li>
      </ul>

      <p>© 2023 Spencer Sharp. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
