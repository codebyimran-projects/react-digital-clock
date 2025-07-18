import React from "react";

function ColorSwitcher({ toggleTheme, theme }) {
  return (
    <button className="switcher-btn" onClick={toggleTheme}>
      <span className="btn-text">
        Switch to {theme === "cyan" ? "Magenta" : "Cyan"}
      </span>
      <span className="btn-icon">🎨</span>
    </button>
  );
}

export default ColorSwitcher;