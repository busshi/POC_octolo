import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import "./App.css";

function App() {
  const [socket, setSocket] = useState(null);
  const [socketConnected, setSocketConnected] = useState(false);
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const subscribeToDateEvent = (interval = 1000) => {
    socket.emit("subscribeToDateEvent", 3600000);
    socket.emit("subscribeToTimeEvent", interval);
  };

  useEffect(() => {
    setSocket(io(`http://localhost:${process.env.PORT || 8000}`));
  }, []);

  useEffect(() => {
    if (!socket) return;

    socket.on("connect", () => {
      console.log(socket.connected);
      setSocketConnected(socket.connected);
      subscribeToDateEvent();
    });
    socket.on("disconnect", () => {
      setSocketConnected(socket.connected);
    });

    socket.on("getDate", (date) => {
      console.log(date);
      setCurrentDate(date);
    });
    socket.on("getTime", (time) => {
      console.log(time);
      setCurrentTime(time);
    });
  }, [socket]);

  return (
    <div className="clock">
      {socketConnected && currentDate && currentTime ? (
        <>
          {currentDate && <div className="date">{currentDate}</div>}
          {currentTime && <div className="time">{currentTime}</div>}
        </>
      ) : (
        <>Connecting to socket...</>
      )}
    </div>
  );
}

export default App;
