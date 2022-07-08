import { useState } from "react";
import {
  Contact,
  Intro,
  Portfolio,
  Work,
  Testimonials,
  Topbar,
  Menu,
} from "./components";
import "./Global.scss";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="section">
        <Intro />
        <Portfolio />
        <Work />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}
