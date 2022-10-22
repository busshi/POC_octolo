import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import "./App.css";

function App() {
  const [socket, setSocket] = useState(null);
  const [socketConnected, setSocketConnected] = useState(false);
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const url = `http://localhost:${
    process.env.NGINX_PORT ? process.env.NGINX_PORT + "/socket.io" : "8080"
  }`;
  console.log(process.env);
  console.log("url", url);
  useEffect(() => {
    setSocket(io(url));
  }, []);

  useEffect(() => {
    if (!socket) return;

    socket.on("connect", () => {
      setSocketConnected(socket.connected);
      subscribeToDateEvent();
    });
    socket.on("disconnect", () => {
      setSocketConnected(socket.connected);
    });

    socket.on("getDate", (data) => {
      setCurrentDate(data);
    });
    socket.on("getTime", (data) => {
      setCurrentTime(data);
    });
  }, [socket]);

  const subscribeToDateEvent = (interval = 1000) => {
    socket.emit("subscribeToDateEvent", interval);
    socket.emit("subscribeToTimeEvent", interval);
  };

  return (
    <div className="clock">
      {socketConnected ? (
        <>
          {currentDate && <div className="date">{currentDate}</div>}
          {currentTime && <div className="time">{currentTime}</div>}
        </>
      ) : (
        <div>Connecting to socket...</div>
      )}
    </div>
  );
}

export default App;
