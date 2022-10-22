const socket = (io) => {
  io.on("connection", (client) => {
    client.on("subscribeToDateEvent", (interval) => {
      setInterval(() => {
        const currentDate = new Date();
        const day = currentDate.toDateString();
        client.emit("getDate", day);
      }, interval);
    });

    client.on("subscribeToTimeEvent", (interval) => {
      setInterval(() => {
        const currentDate = new Date();
        const hours = currentDate.getHours();
        let min = currentDate.getMinutes();
        min = min < 10 ? "0" + min : min;
        let sec = currentDate.getSeconds();
        sec = sec < 10 ? "0" + sec : sec;

        const time = `${hours + ":" + min + ":" + sec}`;

        client.emit("getTime", time);
      }, interval);
    });
  });
};

module.exports = socket;
