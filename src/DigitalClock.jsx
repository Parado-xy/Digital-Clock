import React, { useState, useEffect } from "react";

function DigitalClock() {
  // Create a state variable to store the current time  
  const [time, setTime] = useState(new Date());

  // Set an effect that runs when the component mounts, and every second after that.
  useEffect(() => {
    const tick = () => {
      setTime(new Date());
    };
    const timerId = setInterval(tick, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  // Format the time in HH:MM:SS AM/PM format
  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${meridiem}`;
  }

  // Render the clock
  return (
    <div className="clock-container">
      <div className="clock">
        <span className="time">{formatTime()}</span>
      </div>
    </div>
  );
}

export default DigitalClock;
