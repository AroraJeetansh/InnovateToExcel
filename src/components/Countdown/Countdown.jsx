import React, { Component } from "react";
import "../Countdown/Countdown.css";

import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

class Completed extends Component {
  render() {
    return (
      <span
        className="completed-text"
      >
        Event is on!
      </span>
    );
  }
}

class RenderByUsingReactChild extends Component {
  render() {
    // Set target date to May 2, 2025, 09:00
    const targetDate = new Date(2025, 4, 2, 14, 0).getTime();

    return (
      <FlipClockCountdown
        to={targetDate}
        labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
        labelStyle={{
          fontSize: 18,
          fontWeight: 500,
          textTransform: "uppercase",
        }}
        digitBlockStyle={{ width: 60, height: 80, fontSize: 48 }}
        dividerStyle={{ color: "#df4adf", height: 1 }}
        separatorStyle={{ color: "#df4adf", size: "6px" }}
        duration={0.5}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "30vh",
          width: "100%",
          marginTop: "3rem",
        }}
      >
        <Completed />
      </FlipClockCountdown>
    );
  }
}

export default RenderByUsingReactChild;

