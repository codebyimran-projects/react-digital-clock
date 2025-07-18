import React, { useState, useEffect } from "react";

function DigitalClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const d = new Date();
      const h = d.getHours() % 12 || 12;
      const m = String(d.getMinutes()).padStart(2, "0");
      const s = String(d.getSeconds()).padStart(2, "0");
      const ap = d.getHours() >= 12 ? "PM" : "AM";
      setTime(`${h}:${m}:${s} ${ap}`);
    };
    updateTime();
    const id = setInterval(updateTime, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="clock-container">
      <h1 className="clock-digits">{time}</h1>
    </div>
  );
}

export default DigitalClock;