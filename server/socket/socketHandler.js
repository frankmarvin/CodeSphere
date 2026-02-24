let currentCode = "// Welcome to CodeSphere\nconsole.log('Start coding...');";

module.exports = (io) => {
  io.on("connection", (socket) => {
    socket.emit("code-update", currentCode);

    socket.on("code-change", (code) => {
      currentCode = code;
      socket.broadcast.emit("code-update", currentCode);
    });

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });
};
