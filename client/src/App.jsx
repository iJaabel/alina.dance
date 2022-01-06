import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Sidebar, ImgSlider, About, Interest, Education } from "./components";

export default function App() {
  return (
    <Router>
      <div className="App">
        <div className="side">
          <nav className="navbar side navbar-expand-lg navbar-light p-0">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              style={{ zIndex: "1" }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <Sidebar />
            </div>
          </nav>
        </div>
        <div className="main">
          <div>
            <ImgSlider />
          </div>
          <About />
          <Interest />
          <Education />
        </div>
      </div>
    </Router>
  );
}
