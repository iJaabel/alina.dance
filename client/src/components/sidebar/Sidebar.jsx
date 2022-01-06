/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./Sidebar.css";
import { HashLink as Link } from "react-router-hash-link";
// import {  FiExternalLink } from 'react-icons/fi';
import logo from "../../images/AP.png";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <img src={logo} alt="logo" />
      <h1>
        <Link smooth to="/#start" className="h1_links">
          Alina Pink
        </Link>
      </h1>
      <p style={{ color: "black", fontWeight: "bold" }} className="gmail">
        alinapink007@gmail.com
      </p>
      <ul className="sidebar-nav">
        <li className="sidebar-nav-items">
          <Link smooth to="/#about" className="links">
            About
          </Link>
        </li>
        <li className="sidebar-nav-items">
          <Link smooth to="/#education" className="links">
            Education
          </Link>
        </li>
        <li className="sidebar-nav-items">
          <Link smooth to="/#interest" className="links">
            Interest
          </Link>
        </li>
        {/* <li className="sidebar-nav-items"><a href="http://www.bloggingpeek.com" target="_blank" rel="noopener noreferrer" className="links"> Blog<FiExternalLink/></a></li> */}
      </ul>

      <div className="flip-card-back">
        <ul className="sidebar-nav">
          <li className="sidebar-nav-icons">
            <a
              href="https://www.linkedin.com/in/alina-pinkhasova-5b940356/"
              rel="noopener noreferrer"
              target="_blank"
              className="fa fas fa-linkedin fa-lg"
            />
          </li>
          {/* <li className="sidebar-nav-icons">
              <a
                href="https://www.ebay.com/usr/supreme_finds"
                rel="noopener noreferrer"
                target="_blank"
                className="fa fas fa-ebay fa-lg"
              />
            </li> */}
          <li className="sidebar-nav-icons">
            <a
              href="https://twitter.com/alinaZouk"
              rel="noopener noreferrer"
              target="_blank"
              className="fa fas fa-twitter fa-lg"
            />
          </li>
          <li className="sidebar-nav-icons">
            <a
              href="https://www.instagram.com/badasswestie/"
              rel="noopener noreferrer"
              target="_blank"
              className="fa fas fa-instagram fa-lg"
            />
          </li>
          <li className="sidebar-nav-icons">
            <a
              href="mailto:alinapink007@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
              className="fa fas fa-envelope fa-lg"
            />
          </li>
          <li className="sidebar-nav-icons">
            <a
              href="https://www.facebook.com/supreme.finds"
              rel="noopener noreferrer"
              target="_blank"
              className="fa fas fa-facebook fa-lg"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
