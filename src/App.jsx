import React, { useState } from "react";
import "./App.css";
import DigitalClock from "./components/DigitalClock";
import ColorSwitcher from "./components/ColorSwitcher";

function App() {
  const [theme, setTheme] = useState("cyan");
  const toggleTheme = () =>
    setTheme((prev) => (prev === "cyan" ? "magenta" : "cyan"));

  return (
    <div className={`app theme-${theme}`}>
      <div className="glass-panel">
        <DigitalClock />
        <ColorSwitcher toggleTheme={toggleTheme} theme={theme} />
      </div>

      <footer>
        Crafted with ❤️ by&nbsp;
        <span className="name">CreativeLoop X</span>
      </footer>
    </div>
  );
}

export default App;